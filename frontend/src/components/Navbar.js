import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

const Container = styled('div')({
    height: '60px',
    position: 'relative'
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
    alignItems: 'center',
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
    justifyContent: 'flex-end',
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

const SearchResults = styled('div')({
    position: 'absolute',
    top: '70px',
    left: '0',
    width: '300px',
    maxHeight: '400px',
    backgroundColor: 'white',
    zIndex: '999',
    overflow: 'auto',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
    padding: '10px'
});

const SearchItem = styled('div')({
    padding: '5px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#f9f9f9',
    },
});

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    const navigate = useNavigate();
    const { logout, currentUser } = useAuth();
    const [user, setUser] = useState({});
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        const getUser = async () => {
            const user = await axios({
                method: "GET",
                url: "http://localhost:5000/api/users/" + currentUser?.uid,
            });
            setUser(user.data[0]);
        };
        getUser();
    }, [currentUser]);

    const signOutHandler = () => {
        logout();
        navigate("/");
    };

    const handleSearch = async (event) => {
        const query = event.target.value.toLowerCase();
        if (query.trim() === "") {
            setSearchResults([]);
            setShowResults(false);
            return;
        }
        try {
            const response = await axios.get(
                `http://localhost:5000/api/products`
            );
            const filteredResults = response.data.filter((product) =>
                product.title.toLowerCase().includes(query)
            );
            setSearchResults(filteredResults);
            setShowResults(true);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" onChange={handleSearch} />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                    {currentUser?.email && user?.isAdmin ? (
                        <MenuItem onClick={() => (window.location.href = "http://localhost:3001/")}>
                            ADMIN Panel
                        </MenuItem>
                    ) : null}
                </Left>
                <Center>
                    <Logo onClick={() => navigate("/")}>Books</Logo>
                </Center>
                <Right>
                    {currentUser?.email ? (
                        <MenuItem onClick={signOutHandler}>SIGN OUT</MenuItem>
                    ) : (
                        <MenuItem onClick={() => navigate("/login")} style={{ marginLeft: "20px" }}>
                            SIGN IN
                        </MenuItem>
                    )}
                    {currentUser?.email ? (
                        <MenuItem>Welcome , {currentUser?.email}</MenuItem>
                    ) : (
                        <MenuItem onClick={() => navigate("/register")}>REGISTER</MenuItem>
                    )}
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined style={{ fontSize: "30px" }} />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
            {showResults && (
                <SearchResults>
                    {searchResults.map((product) => (
                        <Link key={product._id} to={`/product/${product._id}`}>
                            <SearchItem>{product.title}</SearchItem>
                        </Link>
                    ))}
                </SearchResults>
            )}
        </Container>
    );
};


export default Navbar;