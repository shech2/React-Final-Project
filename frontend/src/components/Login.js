import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Card, Form, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const { login, currentUser } = useAuth();
    const [error, setError] = useState('')
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(emailRef.current.value, passwordRef.current.value).then((user) => {
                alert(user._tokenResponse && user._tokenResponse.email + "  has logged in");
                navigate('/profile');

            })
        } catch (error) {
            setError(error.message);
        }

    }

    return (
        <div>
            <Card>
                <Card.Header><h2>Log In</h2></Card.Header>
                <Form onSubmit={handleLogin}>
                    <Card.Body>
                        {error && <Alert variant='danger'><p>{error}</p></Alert>}
                        {currentUser?.email}
                        <Form.Group id="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="LoginEmail" placeholder="Enter email" required ref={emailRef} />
                        </Form.Group>

                        <Form.Group id="password">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="LoginPassword" placeholder="Enter password" required ref={passwordRef} />
                        </Form.Group>

                        <div style={{ margin: '10px' }}>
                            <Link to="/forgot-password">Forgot Password ?</Link>
                        </div>
                        <div style={{ margin: '10px' }}>
                            <Link to="/signup">Doesn't have a user ? Sign Up</Link>
                        </div>

                    </Card.Body>
                    <button style={{ margin: '20px' }} type="submit" className="btn btn-primary">Log In</button>
                </Form>
            </Card>
        </div >
    )
}
