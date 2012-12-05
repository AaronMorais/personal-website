var express = require('express'),
	jade = require('jade');

var app = express.createServer();

app.configure(function() {
    app.use(express.static(__dirname + '/static'));
    app.use(express.bodyParser());
});

app.set('views', __dirname+'/template')
app.set('view engine', 'jade');
app.set('view options', {
	layout:false
});

app.get('/', function(req, res, next) {
    res.render('index');
});
app.get('/resume', function(req, res, next) {
    res.render('resume');
});
app.get('/wip', function(req, res, next) {
    res.render('newSite');
});

app.listen(9017);
