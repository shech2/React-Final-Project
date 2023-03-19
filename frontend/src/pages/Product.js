import { styled } from '@mui/material/styles';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useLocation } from 'react-router';
import { publicRequest } from '../requestMethods';
import { useState } from 'react';
import { useEffect } from 'react';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router';

const Container = styled(Box)({

});

const Wrapper = styled(Box)({
    padding: '50px',
    display: 'flex',
});

const ImgContainer = styled(Box)({
    flex: '3',
    padding: '0px 50px',

});

const Image = styled('img')({
    width: '50%', // reduce the width to 50%
    height: '800px', // allow the height to adjust automatically
    objectFit: 'cover',
    objectPosition: 'center',
    margin: 'auto',
    //display: 'block',



});

const InfoContainer = styled(Box)({
    flex: '2',
    padding: '0px 50px',
    marginLeft: '-500px',
});

const Title = styled(Typography)({
    fontWeight: '200',

});

const Desc = styled(Typography)({
    margin: '20px 0px',
});

const Price = styled(Typography)({
    fontSize: '30px',
    fontWeight: '100',
});

const FilterContainer = styled(Box)({
    width: '50%',
    margin: '30px 0px',
    display: 'flex',
    justifyContent: 'space-between',
});


const AddContainer = styled(Box)({
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

});

const AmountContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    fontWeight: '700',
    marginTop: '20px',
});

const Amount = styled(Box)({
    width: '30px',
    height: '30px',
    borderRadius: '10px',
    border: '1px solid teal',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0px 5px',

});

const Button = styled(Box)({
    padding: '15px',
    border: '2px solid teal',
    background: 'white',
    cursor: 'pointer',
    fontWeight: '500',
    marginTop: '20px',
    '&:hover': {
        background: '#f8f4f4',
    }
});



const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getProduct();
    }, [id]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleClick = async () => {
        if (currentUser?.email)
            dispatch(addProduct({ ...product, quantity }));
        else {
            alert("Please Login to add items to cart");
            navigate("/login");
        }
    };

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title variant="h1">{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>{product.price}$</Price>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <AddIcon onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <Button onClick={handleClick} >ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product;
