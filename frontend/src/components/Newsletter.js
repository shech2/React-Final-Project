
import { styled } from '@mui/material/styles';
import { Send } from '@mui/icons-material';

const Container = styled('div')(({ theme }) => ({
    height: '60vh',
    backgroundColor: '#fcf5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
}))

const Title = styled('h1')(({ theme }) => ({
    fontSize: '70px',
    marginBottom: '20px',
}))

const Description = styled('p')(({ theme }) => ({
    fontSize: '24px',
    fontWeight: '300',
    marginBottom: '20px',
}))

const InputContainer = styled('div')(({ theme }) => ({
    width: '35%',
    height: '40px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid lightgray',
}))

const Input = styled('input')(({ theme }) => ({
    border: 'none',
    flex: 8,
    padding: '10px',
}))

const Button = styled('button')(({ theme }) => ({
    flex: 1,
    border: 'none',
    backgroundColor: 'teal',
    color: 'white',
}))


const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favorite products.</Description>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
