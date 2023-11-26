import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Avatar, Badge } from '@mui/material';
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
    cursor: 'pointer',
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
    display: 'flex', // add display:flex to make the child elements align vertically
    alignItems: 'center', // vertically center align the child elements
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5px',
    cursor: 'pointer',
    borderBottom: '1px solid #ccc',
    '&:hover': {
        backgroundColor: '#f9f9f9',
    },
});

const SearchItemImage = styled('img')({
    width: '40px',
    height: 'auto',
    marginRight: '10px',
});

const SearchItemName = styled('div')({
    flexGrow: 1,
    textAlign: 'center',
});

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    const navigate = useNavigate();
    const { logout, currentUser } = useAuth();
    const [user, setUser] = useState({});
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleSearchContainerClick = (event) => {
        event.stopPropagation();
    };

    const handleDocumentClick = () => {
        setShowResults(false);
    };



    useEffect(() => {
        document.addEventListener("click", handleDocumentClick);
        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    useEffect(() => {
        const getUser = async () => {
            const user = await axios({
                method: "GET",
                url: "http://ec2-3-64-196-53.eu-central-1.compute.amazonaws.com:5000/api/users/" + currentUser?.uid,
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
            const response = await axios.get(`https://ec2-3-64-196-53.eu-central-1.compute.amazonaws.com:5000/api/products`);
            const filteredResults = response.data
                .filter((product) => product.title.toLowerCase().includes(query))
                .map((product) => {
                    return { ...product, image: product.img };
                });
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
                    <SearchContainer onClick={handleSearchContainerClick}>
                        <Input placeholder="Search" onChange={handleSearch} />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                    {currentUser?.email && user?.isAdmin ? (
                        <MenuItem onClick={() => (window.location.href = "https://react-final-project-admin.vercel.app/")}>
                            ADMIN Panel
                        </MenuItem>
                    ) : null}
                </Left>
                <Center>
                    <Logo onClick={() => navigate("/")}>Books Store</Logo>
                    {searchResults.length > 0 && showResults && (
                        <SearchResults onClick={handleSearchContainerClick}>
                            {searchResults.map((result) => (
                                <Link key={result._id} to={`/product/${result._id}`}>
                                    <SearchItem>
                                        <SearchItemImage src={result.image} alt={result.title} />
                                        <SearchItemName>{result.title}</SearchItemName>
                                        <div>${result.price}</div>
                                    </SearchItem>
                                </Link>
                            ))}
                        </SearchResults>
                    )}
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
                        <>
                            <MenuItem>Welcome , {currentUser?.email}</MenuItem>
                            <Avatar src={user?.img}></Avatar>
                        </>
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
                        <SearchItem key={product._id} onClick={() => setShowResults(false)}>
                            <Link to={`/product/${product._id}`}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <SearchItemImage src={product.image} alt={product.title} />
                                    <div style={{ marginLeft: '20px', textAlign: 'center' }}>
                                        <h2 style={{ fontSize: '18px', color: 'black', textDecoration: 'none' }}>{product.title}</h2>
                                    </div>
                                </div>


                            </Link>
                        </SearchItem>
                    ))}
                </SearchResults>
            )}
        </Container>
    );
};


export default Navbar;