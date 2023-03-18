import { Server } from 'socket.io';

const ws = new Server();

ws.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('login', (email) => {
        console.log(`${email} logged in`);
        ws.emit('login', email);
    });

    socket.on('logout', (email) => {
        console.log(`${email} logged out`);
        ws.emit('logout', email);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

    socket.on('error', (err) => {
        console.log(err);
    }
    );
});

export default ws;
