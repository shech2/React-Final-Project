import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Card, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const navigate = useNavigate();



    const signupHandler = async (e) => {
        e.preventDefault();
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            setError("Passwords do not match");
        }
        await signup(emailRef.current.value, passwordRef.current.value).catch((error) => {
            setError(error.message);
        });
        navigate('/profile');
    }


    return (
        <div>
            <Card>
                <Card.Header><h2>Sign Up</h2></Card.Header>
                <Form onSubmit={signupHandler}>
                    <Card.Body>
                        {error && <Alert variant='danger'><p>{error}</p></Alert>}
                        <Form.Group id="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="signupEmail" placeholder="Enter email" required ref={emailRef} />
                        </Form.Group>

                        <Form.Group id="password">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="new-password" placeholder="Enter password" required ref={passwordRef} />
                        </Form.Group>

                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" className="form-control" id="current-password" placeholder="Confirm password" required ref={confirmPasswordRef} />
                        <button style={{ margin: '10px' }} type="submit" className="btn btn-primary">Sign Up</button>
                    </Card.Body>
                </Form>
            </Card>
        </div>

    )
}

export default Signup
