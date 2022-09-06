const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const https = require('https');
const mysql = require('mysql');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// database connection
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'YourPassword',
    database: 'DPU'
});

app.get('/', function(req, res){
    res.render('home');
});

app.post('/create', function(req, res){
    connection.connect(function(){
        if(err)throw err;
        console.log("Connected");
    });
});

app.get('/create', function(req, res){
    res.render('create');
});

app.get('/Update', function(req, res){
    res.render('update');
});

app.get('/delete', function(req, res){
    res.render('delete');
});

app.listen('3000', function(){
    console.log("Server is running on port 3000");
});
