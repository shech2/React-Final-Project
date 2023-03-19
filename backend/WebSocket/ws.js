import { Server } from 'socket.io';

const ws = new Server();
const list = [];
var counter = 0;


ws.on('connection', (socket) => {
    console.log(`Client ${++counter} connected`);

    socket.on('login', (email) => {
        console.log(`${email} logged in`);
        if (!list.includes(email))
            list.push(email);
        ws.emit('login', list);
    });

    socket.on('logout', (email) => {
        console.log(`${email} logged out`);
        list.splice(list.indexOf(email), 1);
        ws.emit('logout', list);
    });

    socket.on('disconnect', () => {
        console.log(`Client ${counter--} disconnected`);
    });

    socket.on('error', (err) => {
        console.log(err);
    }
    );
});

export default ws;
