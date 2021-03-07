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
    console.log('New socket')
    const uuid = uuidv4();
    socket.send(JSON.stringify({cmd: 'uuid', uuid: uuid}))

    const leave = (dormid) => {
        if(!dorms[dormid][uuid]) return;
        if(Object.keys(dorms[dormid]).length === 1) delete dorms[dormid];
        else delete dorms[dormid][uuid];
    };

    socket.on('message', data => {
        const { cmd, dormId, name, status } = JSON.parse(data);
        if (cmd === 'create') {
            // Create new dorm
            const newDormId = uuidv4();
            dorms[newDormId] = {};
            dorms[newDormId][uuid] = {};
            dorms[newDormId][uuid]['socket'] = socket;
            dorms[newDormId][uuid]['data'] = [name, status];
            // Send data back
            console.log(dorms)
            socket.send(JSON.stringify({cmd: 'created', dormId: newDormId, dorm: {uuid: [name, status]}}))
            socket.send(JSON.stringify([[name, status]]))
        } else if (cmd === 'join') {
            // Check if dorm exists
            if (!dorms[dormId]) socket.send('no_room');
            // Check if the user exists in the room
            else if (dorms[dormId][uuid]) socket.send('already_joined');
            else {
                // Join room
                dorms[dormId][uuid] = {};
                dorms[dormId][uuid]['socket'] = socket;
                dorms[dormId][uuid]['data'] = [name, status];
            }
            // Send data about room to uuid
            let resData = {}
            Object.entries(dorms[dormId]).forEach(([_uuid,d]) => {
                resData[_uuid] = d['data']
            });
            Object.entries(dorms[dormId]).forEach(([, d]) => {
                d['socket'].send(JSON.stringify({ cmd: 'update', data: resData }))
            });
        } else if(cmd === 'leave') {
            leave(dormId);
        } else if(cmd === 'update') {
            dorms[dormId][uuid]['data'] = [name, status];
            let resData = {}
            Object.entries(dorms[dormId]).forEach(([_uuid,d]) => {
                resData[_uuid] = d['data']
            });
            Object.entries(dorms[dormId]).forEach(([, d]) => {
                d['socket'].send(JSON.stringify({ cmd: 'update', data: resData }))
            });
        }
    });
});
