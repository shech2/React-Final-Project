
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import { popularProducts } from '../data';
import Product from './Product';

const Container = styled('div')({
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
});

const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [books, setBooks] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const API_KEY = process.env.REACT_APP_GOOGLE_API;


    useEffect(() => {
        const getBooks = async () => {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=flower&filter=paid-ebooks&key=${API_KEY}&maxResults=40`)
                .then(response => {
                    setBooks(books);
                    const booksUpdated = response.data.items;
                    console.log(booksUpdated);
                    booksUpdated.map(book => {
                        return (
                            axios.post('http://18.195.148.39:5000/api/products/', {
                                title: book.volumeInfo.title,
                                desc: book.volumeInfo.description,
                                img: book.volumeInfo.imageLinks.thumbnail,
                                categories: book.volumeInfo.categories,
                                Author: book.volumeInfo.authors,
                                topic: book.volumeInfo.subtitle,
                                price: Math.floor(Math.random() * 100) + 1,
                                inStock: true,
                            })
                        )
                    });
                })
                .catch(error => {
                    console.error(error);
                });
        };
        getBooks();
    }, [API_KEY]);


    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `http://18.195.148.39:5000/api/products?category=${cat}`
                        : "http://18.195.148.39:5000/api/products"
                );
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getProducts();
    }, [cat]);

    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter(item =>
                    Object.entries(filters).every(([key, value]) => {
                        if (key === 'Author' || key === 'topic') {
                            return item[key].includes(value);

                        }
                        return true;
                    })
                )
            );
    }, [products, cat, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        }
        else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);

    return (
        <Container >
            {cat
                ? filteredProducts.map(item => <Product item={item} key={item.id} />)
                : products
                    .slice(0, 8)
                    .map(item => <Product item={item} key={item.id} />)}
        </Container>
    )
};

export default Products;
