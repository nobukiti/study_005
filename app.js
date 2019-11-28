var express = require('express');
var app = express();
var port = process.env.PORT || 3002;
var path = require('path');
var router = require('./routes/index.js');

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(router);
app.listen(port);
console.log('Listen on port :' + port);
