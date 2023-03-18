import { Server } from 'socket.io';

const ws = new Server();
const list = [];


ws.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('login', (email) => {
        console.log(`${email} logged in`);
        list.push(email);
        ws.emit('login', list);
    });

    socket.on('logout', (email) => {
        console.log(`${email} logged out`);
        list.splice(list.indexOf(email), 1);
        ws.emit('logout', list);
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
