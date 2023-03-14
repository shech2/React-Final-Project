import { useState } from "react";
import { styled } from '@mui/material/styles';
// import { login } from "../redux/apiCalls";
// import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";


const Container = styled('div')({
    width: '100vw',
    height: '100vh',
    background: `linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });
  
  const Wrapper = styled('div')({
    width: '25%',
    padding: '20px',
    backgroundColor: 'white',
    // '@media(max-width: 768px)': {
    //   width: '75%',
    // },
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
  
  const Button = styled('button')({
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
  });
  
  const Link = styled('a')({
    margin: '5px 0px',
    fontSize: '12px',
    textDecoration: 'underline',
    cursor: 'pointer',
  });
  
  const Error = styled('span')({
    color: 'red',
  });
  
const Login = () => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const dispatch = useDispatch();
    // const { isFetching, error } = useSelector((state) => state.user);
  
    // const handleClick = (e) => {
    //   e.preventDefault();
    //   login(dispatch, { username, password });
    // };
    return (
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
            <Button >LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
    );
  };
    
  export default Login;
  