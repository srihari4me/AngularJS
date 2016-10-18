var express = require('express'); // to use rest api

var cors = require('cors'); // cross origin remote sharing module

var fs = require('fs');

var app = express();

app.use(cors());

app.get('/players', function(req, res) {
    fs.readFile(__dirname + "/" + "player.json", 'utf-8', function(err, data) {
        res.end(data);
    });
})

app.listen(8888, function() {
    console.log('Server started');
})