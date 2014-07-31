// set up ==============
var express = require('express');
var ejs = require('ejs');

var app = express();

// PROD && DEV
app.configure(function() {
	app.engine('html', ejs.renderFile);
	app.set('views', __dirname + '/views');
	app.use(express.static(__dirname + '/public'));
});

// routes ================
var calc = require('./routes/calc.js');

app.get('/', calc.index);
app.listen(3000);
console.log('Listening at http://localhost:3000');