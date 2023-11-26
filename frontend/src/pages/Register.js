import React, { useRef, useState, useEffect } from 'react';
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
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase-config";

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
  const { signup, currentUser } = useAuth();
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
  const [file, setFile] = useState(null);

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
      await signup(emailRef.current.value, passwordRef.current.value);
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, "images/" + fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFile(downloadURL);
          });
        }
      );
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    axios.post('https://ec2-18-184-220-135.eu-central-1.compute.amazonaws.com:5000/api/users', {
      uid: currentUser?.uid,
      email: emailRef.current.value,
      img: file,
      username: username,
      firstName: firstName,
      lastName: lastName,
      isAdmin: false,
    }).then((res) => {
      navigate('/');
    })
  }, [file]);



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
          <Agreement>choose an Image (requried)</Agreement>
          <Input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          {!file ? (
            <Button fullWidth variant="contained" disabled>
              Please choose an image
            </Button>
          ) : loading ? (
            <Button fullWidth variant="contained" disabled>
              Loading...
            </Button>
          ) : (
            <Button fullWidth variant="contained" type="submit">
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
    </Container >
  );

};

export default Register;