const mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit: 10,
    user: 'root'
    // password: ''
});

pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query('DELETE FROM scott.emp WHERE ename = BINARY ?', ['ward'], (err, results, fields) => {
        if (err) throw err;
        console.log(results.affectedRows);
    })
});