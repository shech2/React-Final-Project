import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { styled } from '@mui/material/styles';
import { Add, Remove } from "@mui/icons-material";

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

const ProductColor = styled('div')(({ theme, color }) => ({
  width: 20,
  height: 20,
  borderRadius: '50%',
  backgroundColor: color,
}));

const ProductSize = styled('span')(({ theme }) => ({}));

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
                <Product>
                    <ProductDetail>
                        <Image src="https://pbs.twimg.com/media/Ca29a8jXEAA7XRK?format=jpg&name=medium" />
                        <Details>
                            <ProductName><b>Product:</b> Harry Potter Book</ProductName>
                            <ProductId><b>ID:</b> 123456</ProductId>
                            <ProductColor color="gold"/>
                            <ProductSize><b>Size:</b> 37.5</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>$30</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                    <Image src="https://pbs.twimg.com/media/Ca29a8jXEAA7XRK?format=jpg&name=medium" />
                        <Details>
                            <ProductName><b>Product:</b> Harry Potter Book</ProductName>
                            <ProductId><b>ID:</b> 123456</ProductId>
                            <ProductColor color="gold"/>
                            <ProductSize><b>Size:</b> 37.5</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>$30</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$80</SummaryItemPrice>
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
                    <SummaryItemPrice>$80</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;