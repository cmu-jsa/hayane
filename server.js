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

// Websocket server

wss = new ws.Server({port: 40510})

dorms = {}

wss.on('connection', (socket) => {
    const uuid = uuidv4();
  
    const leave = (dormid) => {
        if(!dorms[dormid][uuid]) return;
        if(Object.keys(dorms[dormid]).length === 1) delete dorms[dormid];
        else delete dorms[dormid][uuid];
    };

    socket.on('message', data => {
        const { cmd, dormId, name, status } = JSON.parse(data);
        if (cmd === 'create') {
            // Create new dorm
            // const newDormId = uuidv4();
            const newDormId = 1;
            dorms[newDormId] = {};
            dorms[dormId][uuid] = {};
            dorms[dormId][uuid]['socket'] = socket;
            dorms[dormId][uuid]['data'] = [name, status];
            // Send data back
            socket.send(JSON.stringify([[name, status]]))
        } else if (cmd === 'join') {
            // Check if dorm exists
            if (!dorms[dormId]) socket.send('no_room');
            // Check if the user exists in the room
            else if (dorms[dormId][uuid]) socket.send('already_joined');
            else {
                // Send info about uuid to room participants
                Object.entries(dorms[dormId]).forEach(([, d]) => {
                    d['socket'].send(JSON.stringify({ cmd: 'new', uuid: uuid, name: name, status: status }))
                });
                // Join room
                dorms[dormId][uuid] = {};
                dorms[dormId][uuid]['socket'] = socket;
                dorms[dormId][uuid]['data'] = [name, status];
            }
            // Send data about room to uuid
            let resData = []
            Object.entries(dorms[dormId]).forEach(([,d]) => {
                resData.push(d['data'])
            });
            socket.send(JSON.stringify(resData));
        } else if(cmd === 'leave') {
            leave(dormId);
        } else if(cmd === 'update') {
            Object.entries(dorms[dormId]).forEach(([, d]) => {
                d['socket'].send(JSON.stringify({ cmd: 'update', uuid: uuid, name: name, status: status }))
            });
        }
    });
});

app.listen(PORT);
