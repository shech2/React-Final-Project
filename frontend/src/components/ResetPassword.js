import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'

export default function ResetPassword() {
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const emailRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            await resetPassword(emailRef.current.value);
            setMessage('Check your inbox for further instructions');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <Container>
                <Card className='card'>
                    <Card.Body>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {message && <Alert variant="success">{message}</Alert>}
                        <h2 className="text-center mb-4">Reset Password</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required ref={emailRef} />
                            </Form.Group>
                            <Button className="w-100 mt-3" type="submit">Reset Password</Button>
                        </Form>
                        <div className="w-100 text-center mt-3">
                            <Link to="/login">Login</Link>
                        </div>
                    </Card.Body>
                    <div className="w-100 text-center mt-2">
                        Need an account? <Link to="/signup">Sign Up</Link>
                    </div>
                </Card>
            </Container>
        </div>
    )
}
