const mysql = require('mysql');

let connection = mysql.createConnection({
    user: 'root',
    password: ''
});

/*
connection.connect((err) => {
    if(err) throw err;
    console.log(connection.threadId);
});
*/

connection.query('select * from scott.dept', (err, results, fields) => {
    if(err) throw err;
    // console.log(results);
    console.log(fields);
});

