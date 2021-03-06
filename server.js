const express = require('express');
const path = require('path')
const favicon = require('serve-favicon');
const ws= require('ws');


const app = express();

const PORT = process.env.PORT || 8080;

app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(express.static(__dirname+'/build'));

app.get('/*', (req, res, next) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT);

const WebSocketServer = ws.Server,

wss = new WebSocketServer({port: 40510})

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('received: %s', message)
  })
})
