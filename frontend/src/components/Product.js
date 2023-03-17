import React, { useState } from 'react';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const Info = styled('div')({
    opacity: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.5s ease',
    cursor: 'pointer',
});

const Container = styled('div')(({ theme }) => ({
    flex: 1,
    margin: '5px',
    minWidth: '370px',
    height: '350px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#white',
    position: 'relative',
    '&:hover': {
        cursor: 'pointer',
    },
}));

const Circle = styled('div')({
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    backgroundColor: 'white',
    position: 'absolute',
});

const Image = styled('img')({
    height: '75%',
    zIndex: 2,
});

const Icon = styled('div')({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
    transition: 'all 0.5s ease',
    '&:hover': {
        backgroundColor: '#e9f5f5',
        transform: 'scale(1.1)',
    },
});

const Product = ({ item }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <Container
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <Circle />
            <Image src={item.img} />
            <Info style={{ opacity: isHovering ? 1 : 0 }}>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlined />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    );
};
export default Product;