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

});

const Description = styled('p')({
    margin: '20px 0',
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
    margin: '20px',

}));

const Title = styled('h3')({

});

const List = styled('ul')({

});

const ListItem = styled('li')({

});

const Left = styled('div')({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
});

const Center = styled('div')({
    flex: 1,
});

const Right = styled('div')({
    flex: 1,
});

const ContactItem = styled('div')({

});

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Books</Logo>
                <Description>
                    Online bookstore, here you can find all the books at excellent prices.
                    For more details contact us or follow us on one of the social platforms.
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
            </Right>
        </Container>
    )
}

export default Footer;
