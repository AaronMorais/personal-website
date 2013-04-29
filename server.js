var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
 res.sendfile(__dirname + '/public/index.html');
}); 

app.get('/resume', function(req,res){
 res.sendfile(__dirname + '/public/index.html');
}); 

app.listen(process.env.PORT || 3000);