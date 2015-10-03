var express = require('express');
var app = express(); //express is just a funtion

//configure app
//use middleware
//define routes

app.get('/', function(req, res) {

    res.send('hello, world!!');
});

app.listen(8080, function() {

    console.log('ready on port 8080');

});