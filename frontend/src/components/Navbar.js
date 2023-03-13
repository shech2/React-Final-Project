import React from 'react';
import { styled } from '@mui/material/styles';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';

const Container = styled('div')({
    height: '60px',
});

const Wrapper = styled('div')({
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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
});

const Logo = styled('h1')({
    fontWeight: 'bold',
});

const Right = styled('div')({
    flex: 1,
    display: 'flex',
    alignitems: 'center',
    justifyContent: 'flex-end'
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
});

const Navbar = () => {
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
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined style={{ fontSize: '30px' }} />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;