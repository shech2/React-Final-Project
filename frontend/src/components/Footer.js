import { styled } from '@mui/material/styles';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Room from '@mui/icons-material/Room';
import Phone from '@mui/icons-material/Phone';
import MailOutline from '@mui/icons-material/MailOutline';

const Container = styled('div')({
    display: 'flex',
});

const Logo = styled('h1')({
    marginLeft: '25px',
});

const Description = styled('p')({
    margin: '20px 0',
    whiteSpace: 'pre-wrap',
});

const SocialContainer = styled('div')({
    display: 'flex',

});

const SocialIcon = styled('div')(({ color }) => ({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    color: 'white',
    backgroundColor: `#${color}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20px',

}));

const Title = styled('h3')({
    marginBottom: '30px',
    marginLeft: '75px',


});

const List = styled('ul')({
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
});

const ListItem = styled('li')({
    width: '50%',
    marginBottom: '10px',
});

const Left = styled('div')({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
});

const Center = styled('div')({
    flex: 1,
    padding: '20px',
});

const Right = styled('div')({
    flex: 1,
    padding: '20px',
});

const ContactItem = styled('div')({
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
});

const Payment = styled('img')({
    width: '50%',
});

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Books</Logo>
                <Description>
                    <Description>
                        Online bookstore, here you can find all the books at excellent prices.
                        For more details contact us or follow us on one of the social platforms.
                        We are always happy to assist with any questions or concerns.
                    </Description>
                </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: '10px' }} />
                    Rothschild Boulevard, Tel Aviv, Israel
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: '10px' }} />
                    +972 541112233
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: '10px' }} />
                    Books@mail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer;
