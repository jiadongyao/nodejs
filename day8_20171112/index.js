/*
 * https://github.com/thu/Nodejs_1707
 *
 * Copyright mingfei.net@gmail.com 
 * Released under the MIT license 
 * 
 * Date: 2017/11/12 15:32
 */

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

let app = express();

app.use(bodyParser.urlencoded());

let pool = mysql.createPool({
    connectionLimit: 10,
    user: 'root'
});

app.get('/', (req, res) => { // get post put delete
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/sign-up', (req, res) => { // get post put delete
    res.sendFile(__dirname + '/public/sign-up.html');
});

app.post('/signUp', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query('INSERT INTO db_demo.user VALUE(NULL, ?, ?)', [username, password], (err, results, fields) => {
            console.log(results.affectedRows);
            if (results.affectedRows === 1) {
                res.sendFile(__dirname + '/public/index.html');
            } else {
                res.sendFile(__dirname + '/public/sign-up.html');
            }
            connection.release();
        })
    })
});

app.post('/signIn', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query('SELECT * FROM db_demo.user WHERE username = ? AND password = ?', [username, password], (err, results, fields) => {
            console.log(results.length)
            if (results.length === 1) {
                res.sendFile(__dirname + '/public/home.html');
            } else {
                res.sendFile(__dirname + '/public/index.html');
            }
            connection.release();
        })
    })
});

app.listen(80);