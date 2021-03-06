const express = require('express');
const path = require('path')
const favicon = require('serve-favicon');


const app = express();

const PORT = process.env.PORT || 8080;

app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(express.static(__dirname+'/build'));

app.get('/*', (req, res, next) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT);
