var express = require('express');
var app = express();

var port = process.env.port || 8000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(8000, function() {
    console.log('App is running at http://localhost:' + port);
});
