const mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit: 10,
    user: 'root',
});

pool.getConnection((err, connection) => {
    if (err) throw err;
    let data = [
        ['user1', 'pass1'],
        ['user2', 'pass2'],
        ['user3', 'pass3']
    ]; // Shift + Alt + Insert
    connection.query('insert into scott.test(username, password) values ?', [data], (err, results, fields) => {
        if (err) throw err;
        console.log(results.affectedRows);
        connection.release();
    })
});