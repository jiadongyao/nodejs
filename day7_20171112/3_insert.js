const mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit: 10,
    user: 'root',
    password: ''
});

/*
pool.getConnection((err, connection) => {
    if(err) throw err;
    connection.query('insert into scott.emp(empno) value(3333)', (err, results, fields) => {
        if(err) throw err;
        console.log(results);
        connection.release();
    })
});
*/

pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query('insert into scott.test value(null, ?, ?)', ['Jerry', '111'], (err, results, fields) => {
        if (err) throw err;
        console.log(results.insertId);
    })
});