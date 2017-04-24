console.log("hahaha!");
var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 5000);
var routes = require('./api/routes');
var path = require('path');
app.set('port', 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);