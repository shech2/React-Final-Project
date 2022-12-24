import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateEmail } from "firebase/auth";
import { Auth } from '../firebase-config';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(Auth, email, password);
    }

    const logout = () => {
        return signOut(Auth);
    }

    const updateUser = (newEmail) => {
        logout();
        return updateEmail(currentUser, newEmail);

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
        updateUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
