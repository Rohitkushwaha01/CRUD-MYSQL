const express = require('express');
const body = require('body-parser');
const ejs = require('ejs');
const https = require('https');
const mysql = require('mysql');

const app = express();
const fnameArray=[];
const lnameArray=[];

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(body.urlencoded({ extended: true }));

// database connection
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'YourPassword',
    database: 'DPU'
});

app.get('/', function(req, res){
<<<<<<< HEAD
    res.render('home')
});

=======
    res.render('home');
});

app.post('/create', function(req, res){
    connection.connect(function(){
        if(err)throw err;
        console.log("Connected");
    });
});

>>>>>>> 03949dd111247060ba938377d5128737bdb31a1c
app.get('/create', function(req, res){
    res.render('create');
});

<<<<<<< HEAD
app.post('/create', function(req, res){
    fnameArray.push(req.body.fname);
    lnameArray.push(req.body.lname);
    res.render('database', {
        fnameArray,
        lnameArray
    });
    console.log(fnameArray);
    console.log(lnameArray);
});


// app.get('/database', function(req, res){
//     res.render('database')
// })

app.listen('3000', function(){
    console.log("Server is running on port 3000")
})


// app.get('/Update', function(req, res){
//     res.render('update')
// })

// app.get('/delete', function(req, res){
//     res.render('delete')
// })
=======
app.get('/Update', function(req, res){
    res.render('update');
});

app.get('/delete', function(req, res){
    res.render('delete');
});

app.listen('3000', function(){
    console.log("Server is running on port 3000");
});
>>>>>>> 03949dd111247060ba938377d5128737bdb31a1c
