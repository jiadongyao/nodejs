const mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit: 10,
    user: 'root',
    multipleStatements: true
});

pool.getConnection((err, connection) => {
    if(err) throw err;
    connection.query('select 1; select 2', (err, results, fields) => {
        if(err) throw err;
        console.log(results);
        connection.release();
    })
});