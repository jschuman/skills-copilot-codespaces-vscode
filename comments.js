// create web server
var express = require('express');
var app = express();

// create routes
app.get('/', function(req, res){
    res.send('Hello World');
});

// create a route for /comments
app.get('/comments', function(req, res){
    res.send('This is the comments page');
});

// create a route for /comments/new
app.get('/comments/new', function(req, res){
    res.send('This is the new comments page');
});

// create a route for /comments/:id
app.get('/comments/:id', function(req, res){
    res.send('This is the comments page for comment id: ' + req.params.id);
});

// start the server
app.listen(3000, function(){
    console.log('Server is running on port 3000');
});

// run the server
// node comments.js
// open a web browser and go to http://localhost:3000
// you should see "Hello World"
// go to http://localhost:3000/comments
// you should see "This is the comments page"
// go to http://localhost:3000/comments/new
// you should see "This is the new comments page"
// go to http://localhost:3000/comments/123
// you should see "This is the comments page for comment id: 123"