import React, { useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';


const Container = styled('div')({
  width: '100vw',
  height: '100vh',
  background: `linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ), url("https://wallpapers.com/images/hd/white-ceramic-teacup-with-saucer-near-two-books-3cik2xoje5lahcit.jpg") center`,
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Wrapper = styled('div')({
  width: '40%',
  padding: '20px',
  backgroundColor: 'white',
  '@media(max-width: 768px)': {
    width: '75%',
  },
});

const Title = styled('h1')({
  fontSize: '24px',
  fontWeight: 300,
});

const Form = styled('form')({
  display: 'flex',
  flexWrap: 'wrap',
});

const Input = styled(TextField)({
  flex: 1,
  minWidth: '40%',
  margin: '20px 10px 0px 0px',
});

const Agreement = styled('span')({
  fontSize: '12px',
  margin: '20px 0px',
});

const Button = styled('button')({
  width: '40%',
  border: 'none',
  padding: '15px 20px',
  backgroundColor: 'teal',
  color: 'white',
  cursor: 'pointer',
});

const Register = () => {
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const signupHandler = async (e) => {
    e.preventDefault();
    setError('');
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError("Passwords do not match");
      return;
    }
    try {
      await signup(emailRef.current.value, passwordRef.current.value).then((res) => {
        console.log(res.user.uid);
        axios.post('http://localhost:5000/api/users', {
          uid: res.user.uid,
          email: emailRef.current.value,
          username: username,
          firstName: firstName,
          lastName: lastName,
          isAdmin: false,
        }).then((res) => {
          if (res.status === 200)
            navigate('/');
        }).catch((err) => {
          console.log(err);
        });
      });
    } catch (error) {
      console.log(error);
      setError('Failed to create an account');
    }
  }


  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={signupHandler}>
          <Input label="Name" variant="outlined" margin="normal" required value={firstName} onChange={(e) => setFirstName(e.target.value)} fullWidth autoFocus />
          <Input label="Last Name" variant="outlined" margin="normal" required fullWidth value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <Input label="Username" variant="outlined" margin="normal" required fullWidth value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input label="Email" variant="outlined" margin="normal" required fullWidth inputRef={emailRef} />
          <Input label="Password" variant="outlined" margin="normal" required fullWidth type={showPassword ? 'text' : 'password'} inputRef={passwordRef} InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }} />
          <Input label="Confirm Password" variant="outlined" margin="normal" required fullWidth type={showPassword ? 'text' : 'password'} inputRef={confirmPasswordRef} InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          {loading ? (
            <Button fullWidth variant="contained" disabled>
              Creating...
            </Button>
          ) : (
            <Button type="submit" fullWidth variant="contained" color="primary">
              CREATE
            </Button>
          )}
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
        </Form>
      </Wrapper>
    </Container>
  );

};

export default Register;