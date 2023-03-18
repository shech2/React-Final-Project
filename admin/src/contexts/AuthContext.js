import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateEmail, sendPasswordResetEmail, deleteUser } from "firebase/auth";
import { Auth } from '../firebase-config';
import io from 'socket.io-client';

const socket = io('http://localhost:5001');

socket.on('connect', () => {
    console.log('Admin Context Client connected');
});
socket.on('login', (email) => {
    console.log(`${email} logged in`);
    });
const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    const deleteAccount = (user) => {
        return deleteUser(user);
    }

    const login = (email, password) => {
        socket.emit('login', email);
        return signInWithEmailAndPassword(Auth, email, password);
    }

    const logout = () => {
        socket.emit('logout', currentUser.email);
        return signOut(Auth);
    }

    const updateUser = (newEmail) => {
        logout();
        return updateEmail(currentUser, newEmail);

    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(Auth, email);
    }

    useEffect(() => {
        const unsubscribe = Auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signup,
        login,
        logout,
        updateUser,
        resetPassword,
        deleteAccount
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
