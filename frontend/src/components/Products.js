
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

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/products/');
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getProducts();
    }, []);

    return (
        <Container >
            {products.map(item => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products
