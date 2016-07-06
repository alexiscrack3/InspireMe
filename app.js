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
    res.sendFile(__dirname + '/public/index.html');
});

router.get('/favorite', function(req, res) {
    res.sendFile(__dirname + '/public/favorite.html');
});

router.get('/about', function(req, res) {
    res.sendFile(__dirname + '/public/about.html');
});

app.use('/', router);

app.use(function(req, res, next) {
    res.status(404);
    res.sendFile(__dirname + '/public/404.html');
});

app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.status(500).sendFile(__dirname + '/public/500.html');
});

var server = app.listen(process.env.PORT || config.port, function() {
    console.log('Listening on port %d', server.address().port);
});
