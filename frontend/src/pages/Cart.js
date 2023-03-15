import React, { useEffect } from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { styled } from '@mui/material/styles';
import { Add, Remove } from "@mui/icons-material";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled('div')``;

const Wrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}));

const Title = styled('h1')(({ theme }) => ({
  fontWeight: 300,
  textAlign: 'center',
}));

const Top = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
}));

const TopButton = styled('button')(({ theme, type }) => ({
  padding: theme.spacing(1),
  fontWeight: 600,
  cursor: 'pointer',
  border: type === 'filled' ? 'none' : undefined,
  backgroundColor: type === 'filled' ? 'black' : 'transparent',
  color: type === 'filled' ? 'white' : undefined,
}));

const TopTexts = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));
const TopText = styled('span')(({ theme }) => ({
  textDecoration: 'underline',
  cursor: 'pointer',
  margin: theme.spacing(0, 1),
}));

const Bottom = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const Info = styled('div')(({ theme }) => ({
  flex: 3,
}));

const Product = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const ProductDetail = styled('div')(({ theme }) => ({
  flex: 2,
  display: 'flex',
}));

const Image = styled('img')(({ theme }) => ({
  width: 200,
}));

const Details = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
}));

const ProductName = styled('span')(({ theme }) => ({}));

const ProductId = styled('span')(({ theme }) => ({}));

const PriceDetail = styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ProductAmountContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const ProductAmount = styled('div')(({ theme }) => ({
  fontSize: 24,
  margin: theme.spacing(0, 1),
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(0, 2),
  },
}));

const ProductPrice = styled('div')(({ theme }) => ({
  fontSize: 30,
  fontWeight: 200,
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2),
  },
}));

const Hr = styled('hr')({
    backgroundColor: '#eee',
    border: 'none',
    height: '1px',
  });
  
  const Summary = styled('div')({
    flex: 1,
    border: '0.5px solid lightgray',
    borderRadius: '10px',
    padding: '20px',
    height: '50vh',
  });
  
  const SummaryTitle = styled('h1')({
    fontWeight: 200,
  });
  
  const SummaryItem = styled('div')(({ type }) => ({
    margin: '30px 0px',
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: type === 'total' && '500',
    fontSize: type === 'total' && '24px',
  }));
  
  const SummaryItemText = styled('span')({});
  
  const SummaryItemPrice = styled('span')({});
  
  const Button = styled('button')({
    width: '100%',
    padding: '10px',
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 600,
  });
  
const Cart = () => {
  const cart = useSelector(state=>state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
      const makeRequest = async () => {
          try{ 
            const res = await userRequest.post("/checkout/payment", {
              tokenId: stripeToken.id,
              amount: 500 ,
            });
            history("/success",{
              state: { stripeData: res.data, products: cart },
            });
          }catch{}
      };
      stripeToken && makeRequest();
      }, [stripeToken,cart.total,history]);


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag (2)</TopText>
                <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                {cart.products.map(product => (
                  <Product>
                  <ProductDetail>
                      <Image src={product.img} />
                      <Details>
                          <ProductName><b>Product:</b> {product.title}</ProductName>
                          <ProductId><b>ID:</b>{product._id}</ProductId>
                      </Details>
                  </ProductDetail>
                  <PriceDetail>
                      <ProductAmountContainer>
                          <Add/>
                          <ProductAmount>{product.quantity}</ProductAmount>
                          <Remove/>
                      </ProductAmountContainer>
                      <ProductPrice>
                        {product.price * product.quantity}$
                      </ProductPrice>
                  </PriceDetail>
              </Product>
                ))}
                <Hr/>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>{cart.total}$</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$6</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$-6</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText type="total">Total</SummaryItemText>
                    <SummaryItemPrice>{cart.total}$</SummaryItemPrice>
                </SummaryItem>
                <StripeCheckout
                name = "Books Store"
                image = "https://images-platform.99static.com//o5_Q8pUagynJuidDta7JRMJ7_K8=/311x281:1652x1622/fit-in/590x590/99designs-contests-attachments/74/74026/attachment_74026482"
                billingAddress
                shippingAddress
                description = {`Your total is ${cart.total}`}
                amount = {100}
                token = {onToken}
                stripeKey = {KEY}
                >
                <Button>CHECKOUT NOW</Button>
                </StripeCheckout>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;