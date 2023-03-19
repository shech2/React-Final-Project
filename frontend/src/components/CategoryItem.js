import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { mobile } from '../responsive';

const Container = styled('div')(({ theme }) => ({
    flex: 1,
    margin: '3px',
    height: '70vh',
    position: 'relative',
}));

const Image = styled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    // ...mobile({ height: '20vh' }),
}));

const Info = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}));

const Title = styled('h1')(({ theme }) => ({
    color: 'black',
    marginBottom: '20px',
}));

const Button = styled('button')(({ theme }) => ({
    border: 'none',
    padding: '10px',
    background: 'white',
    color: 'gray',
    cursor: 'pointer',
    fontWeight: '600',
}));

const CategoryItem = ({ item }) => {
   
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    );
};

export default CategoryItem;

