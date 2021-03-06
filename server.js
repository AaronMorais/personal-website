var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
 res.sendfile(__dirname + '/public/index.html');
}); 

app.get('/resume', function(req,res){
 res.sendfile(__dirname + '/public/resume.pdf');
}); 

app.get('/projects', function(req,res){
 res.sendfile(__dirname + '/public/index.html');
}); 

app.get('/dark', function(req,res){
 res.sendfile(__dirname + '/public/dark.html');
}); 

app.listen(process.env.PORT || 3000);
