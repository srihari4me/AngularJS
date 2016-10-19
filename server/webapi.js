

// Load Our Modules

var express = require('express');
var bodyParser = require('body-parser');
var players = require('./routes/players');
var mongoose = require('mongoose');
var cors=require('cors');


var app = express();
app.use(cors());
//connect to our database
//Ideally you will obtain DB details from a config file

var dbName='test';

var connectionString='mongodb://localhost:27017/'+dbName;

mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.use(function(req,res,next){
    var _send = res.send;
    var sent = false;
    res.send = function(data){
        if(sent) return;
        _send.bind(res)(data);
        sent = true;
    };
    next();
});
app.use('/service', players);


module.exports = app;