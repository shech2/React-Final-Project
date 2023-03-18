import { Server } from 'socket.io';

const ws = new Server();

ws.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('login', (user) => {
        console.log(`${user} logged in`);
        ws.emit('user:login', user);
    });

    socket.on('logout', (user) => {
        console.log(`${user} logged out`);
        ws.emit('user:logout', user);
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
