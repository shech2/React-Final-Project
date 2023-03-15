import React from 'react';
import { styled } from '@mui/material/styles';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled('div')({
    height: '60px',
    // ...mobile({ height: '50px' }),
});

const Wrapper = styled('div')({
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // ...mobile({ padding: '10px 0px' }),
});

const Left = styled('div')({
    flex: 1,
    display: 'flex',
    alignitems: 'center',
});

const Language = styled('span')({
    fontSize: '18px',
    cursor: 'pointer',
    marginTop: '5px',
    // ...mobile({ display: 'none' }),
});

const SearchContainer = styled('div')({
    border: '0.5px solid lightgray',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '25px',
    padding: '5px',
});

const Input = styled('input')({
    border: 'none',
    // ...mobile({ width: '50px' }),
});

const Logo = styled('h1')({
    fontWeight: 'bold',
    // ...mobile({ fontSize: '24px' }),
});

const Right = styled('div')({
    flex: 1,
    display: 'flex',
    alignitems: 'center',
    justifyContent: 'flex-end',
    // ...mobile({ flex: 2, justifyContent: 'center' }),
});

const Center = styled('div')({
    flex: 1,
    textAlign: 'center',
});

const MenuItem = styled('div')({
    fontSize: '18px',
    cursor: 'pointer',
    marginLeft: '30px',
    marginRight: '20px',
    // ...mobile({ fontSize: '14px', marginLeft: '10px', marginRight: '10px'}),
});

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Books</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem style={{ marginLeft: '20px' }}>SIGN IN</MenuItem>
                    <Link to = "/cart" > 
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined style={{ fontSize: '30px' }} />
                        </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;