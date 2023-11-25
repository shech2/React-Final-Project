import { createContext, useContext, useState, useEffect } from 'react';
import io from 'socket.io-client';


const SocketContext = createContext();

export const useSocket = () => {
    return useContext(SocketContext);
}

export const SocketProvider = ({ children }) => {
    const [connectedUsers, setConnectedUsers] = useState([]);
    const socket = io('http://18.195.148.39:5001');

    socket.on('connect', () => {
        console.log('Socket Client connected');
    });

    // save state of connected users in local storage
    const saveState = (state) => {
        try {
            const serializedState = JSON.stringify(state);
            localStorage.setItem('connectedUsers', serializedState);
        } catch (err) {
            console.log(err);
        }
    }

    // get state of connected users from local storage
    const loadState = () => {
        try {
            const serializedState = localStorage.getItem('connectedUsers');
            if (serializedState === null) return undefined;
            return JSON.parse(serializedState);
        } catch (err) {
            console.log(err);
            return undefined;
        }
    }

    // if state exists in local storage, set it to connectedUsers
    useEffect(() => {
        const state = loadState();
        if (state) {
            setConnectedUsers(state);
        }
    }, []);

    // get connected users from server
    useEffect(() => {
        socket.on('login', (list) => {
            saveState(list);
            setConnectedUsers(list);
        });
        socket.on('logout', (list) => {
            saveState(list);
            setConnectedUsers(list);
        });
    }, [socket, saveState]);



    const value = {
        socket,
        connectedUsers,
    }

    return (
        <SocketContext.Provider value={value}>
            {children}
        </SocketContext.Provider>
    )
}
