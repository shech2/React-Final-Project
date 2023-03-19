import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateEmail, sendPasswordResetEmail, deleteUser } from "firebase/auth";
import { Auth } from '../firebase-config';
import io from 'socket.io-client';

const socket = io('http://localhost:5001');

socket.on('connect', () => {
    console.log('Auth Context Client connected');
});
socket.on('login', (list) => {
    console.log(list);
});
socket.on('logout', (list) => {
    console.log(list);
});

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();

    const signup = async (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password).then((userCredentials) => {
            socket.emit('login', userCredentials.user.email);
        })
    }

    const deleteAccount = (user) => {
        return deleteUser(user);
    }

    const login = async (email, password) => {
        return signInWithEmailAndPassword(Auth, email, password).then((userCredentials) => {
            socket.emit('login', userCredentials.user.email);
        });
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
