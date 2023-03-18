import { useState } from "react";
import { styled } from '@mui/material/styles';
import { CircularProgress } from '@mui/material'
import { useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';

const Container = styled('div')({
  width: '100vw',
  height: '100vh',
  background: `linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ), url("https://www.pixelstalk.net/wp-content/uploads/2016/06/Book-desktop-wallpaper-images-hd-wallpapers.jpg") center`,
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Wrapper = styled('div')({
  width: '25%',
  padding: '20px',
  backgroundColor: 'white',
});

const Title = styled('h1')({
  fontSize: '24px',
  fontWeight: 300,
});

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
});

const Input = styled('input')({
  flex: 1,
  minWidth: '40%',
  margin: '10px 0',
  padding: '10px',
});

const Button = styled('button')(({ theme }) => ({
  width: '40%',
  border: 'none',
  padding: '15px 20px',
  backgroundColor: 'teal',
  color: 'white',
  cursor: 'pointer',
  marginBottom: '10px',
  '&:disabled': {
    color: 'green',
    cursor: 'not-allowed',
  },
  [theme.breakpoints.down('sm')]: {
    width: '75%',
  },
}));

const Link = styled('a')({
  margin: '5px 0px',
  fontSize: '12px',
  textDecoration: 'underline',
  cursor: 'pointer',
});

const Error = styled('span')({
  color: 'red',
});

const Spinner = styled(CircularProgress)({
  color: 'white',
});

const ButtonWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
});

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setTimeout(() => {
        setLoading(false);
        navigate('/');
      }, 1000);
    } catch {
      setError('Failed to log in');
      setLoading(false);
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="email" placeholder="Email" ref={emailRef} required />
          <Input type="password" placeholder="Password" ref={passwordRef} required />
          {error && <Error>{error}</Error>}
          <ButtonWrapper>
            <Button disabled={loading} type="submit">
              {loading ? <Spinner size={20} /> : 'Login'}
            </Button>
          </ButtonWrapper>
        </Form>
        <Link href="#">Forgot Password?</Link>
      </Wrapper>
    </Container>
  );
}

export default Login;
