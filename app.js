var express = require('express');
var morgan  = require('morgan');
var config  = require('./config');

var app = express();

// Middlewares
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

// Routes
var router = express.Router();
router.get('/', function(req, res) {
    res.sendfile('./public/index.html');
});

router.get('/favorite', function(req, res) {
    res.sendfile('./public/favorite.html');
});

router.get('/about', function(req, res) {
    res.sendfile('./public/about.html');
});

app.use('/', router);

app.use(function(req, res, next) {
    res.status(404);
    res.sendfile('./public/404.html');
});

app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.status(500).sendfile('./public/500.html');
});

var server = app.listen(config.port, function() {
    console.log('Listening on port %d', server.address().port);
});
