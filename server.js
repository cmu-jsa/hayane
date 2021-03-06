const express = require('express');
const path = require('path')
const favicon = require('serve-favicon');
const ws = require('ws');
const { v4: uuidv4 } = require('uuid');

// Express server

const app = express();

const PORT = process.env.PORT || 8080;

app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(express.static(__dirname+'/build'));

app.get('/*', (req, res, next) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT);

// Websocket server

wss = new ws.Server({port: 40510})

dorms = {}

wss.on('connection', (socket) => {
    const uuid = uuidv4();
  
    const leave = (dormid) => {
        if(!dorms[dormid][uuid]) return;
        if(Object.keys(dorms[dormid]).length === 1) delete rooms[room];
        else delete dorms[dormid][uuid];
    };
  
    socket.on('message', data => {
        const { message, cmd, dormid } = JSON.parse(data);
        if (cmd === 'join') {
            console.log(message)
            console.log(cmd)
            console.log(dormid)
            if(!dorms[dormid]) dorms[dormid] = {}; // create the room
            if(!dorms[dormid][uuid]) dorms[dormid][uuid] = socket; // join the room
        }
        else if(cmd === 'leave') {
            leave(dormid);
        }
        else if(cmd === 'status') {
            Object.entries(dorms[dormid]).forEach(([, sock]) => sock.send({ message }));
        }
    });
});
