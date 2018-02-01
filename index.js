//bailey.systems
//NodeJS web-server example 1
//this is an example of a comment in JavaScript

// Require modules
var express = require('express'); //express module must be installed using NPM
var app = express(); //create app
var path = require('path'); //built in path module, used to resolve paths of relative files
var port = 3700 //stores port number to listen on

app.use(express.static(path.join(__dirname + '/css'))); //allows html file to reference stylesheet "helloworld.css" that is stored in ./css directory

app.get('/', function(req, res) { //on html request of root directory, run callback function
    res.sendFile(path.join(__dirname, 'index.html')); //send html file named "helloworld.html"
});

app.listen(port);//listen for network traffic on port specified by port variable

console.log("Now listening on port " + port); //write to the console which port is being used