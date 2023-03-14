
import { styled } from '@mui/material/styles';
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled('div')({
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
});

const Products = () => {
    return (
        <Container >
            {popularProducts.map(item => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products
