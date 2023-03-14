import { styled } from '@mui/material/styles';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled(Box)({

});

const Wrapper = styled(Box)({
    padding: '50px',
    display: 'flex',
});

const ImgContainer = styled(Box)({
    flex: '1',
});

const Image = styled('img')({
    width: '100%',
    height: '90vh',
    objectFit: 'cover',
});

const InfoContainer = styled(Box)({
    flex: '1',
    padding: '0px 50px',
});

const Title = styled(Typography)({
    fontWeight: '200',
});

const Desc = styled(Typography)({
    margin: '20px 0px',
});

const Price = styled(Typography)({
    fontSize: '40px',
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
    '&:hover': {
        background: '#f8f4f4',
    }
});



const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://www.pngitem.com/pimgs/m/256-2562013_transparent-abject-clipart-rich-dad-poor-dad-hd.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title variant="h1">Rich dad poor dad</Title>
                    <Desc>
                        25 years have passed since the publication of Robert Kiyosaki's book Rich Dad, Poor Dad, which was translated into dozens of languages, changed the way tens of millions of people around the world think about money and investments, and became the number one guide of all time for personal financial management.
                        This is Robert's story about the two fathers who raised him - his real father, the poor father, and his best friend's father, the rich father - and the ways in which each of them shaped his way of thinking about money and investments. The book shatters the myth that one must enjoy a high income to be rich, and explains the difference between working for money and letting money work for us.
                    </Desc>
                    <Price>$ 35</Price>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon />
                            <Amount>1</Amount>
                            <AddIcon />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product;
