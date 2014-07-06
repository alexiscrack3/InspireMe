var express = require('express');
var morgan = require('morgan');
var methodOverride = require('method-override');
var router = express.Router();
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(methodOverride());

// Routes
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

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
