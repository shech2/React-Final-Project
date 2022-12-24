import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Card, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const newEmailRef = useRef();
    const { currentUser, updateUser, logout } = useAuth();
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateUser(newEmailRef.current.value?.trim()).then(() => {
                alert("Profile updated successfully please login again to see changes");
                navigate('/');
            });
        } catch (error) {
            setError(error.message);
        }
    }

    const handleLogOut = async (e) => {
        e.preventDefault();
        await logout().then(() => {
            alert(currentUser && currentUser.email ? currentUser.email + "  has logged out" : "No user is logged in");
            navigate('/');
        }
        ).catch((error) => {
            setError(error.message);
        }
        )
    }


    return (
        <div>
            <Card>
                <Form onSubmit={handleUpdate}>
                    <Card.Header><h2>Profile</h2></Card.Header>
                    <Card.Body>
                        {error && <Alert variant='danger'><p>{error}</p></Alert>}
                        <strong>Email:</strong> {currentUser?.email}
                        <Form.Group id="newEmail">
                            <label style={{ margin: '5px' }} htmlFor="newEmail">Update Email</label>
                            <input type="email" className="form-control" id="newEmail" placeholder="Enter new email" required ref={newEmailRef} />
                        </Form.Group>
                        <button type='submit' className="btn btn-primary w-100 mt-3">Update Profile</button>
                        <button onClick={handleLogOut} type='submit' className="btn btn-primary w-100 mt-3">Log out</button>
                    </Card.Body>
                </Form>
            </Card>
        </div>
    )
}
