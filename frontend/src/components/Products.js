
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

const Products = ({cat,filters,sort}) => {
    console.log(cat,filters,sort);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `http://localhost:5000/api/products?category=${cat}`
                        : "http://localhost:5000/api/products"
                );
                setProducts(res.data);
                console.log(res);
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
              Object.entries(filters).every(([key,value]) => {
                if (key === 'genre' || key === 'topic') {
                  return item[key].includes(value);
                }
                return true;
              })
            )
          );
      },[products,cat,filters]);

      useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort==="asc") {
            setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.price - b.price)
            );
        }
        else{
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
