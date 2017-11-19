const mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit: 10,
    user: 'root'
});

pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query('UPDATE scott.emp SET ename=? WHERE empno=?', ['scott', '7499'], (err, results, fields) => {
        if (err) throw err;
        console.log(results.affectedRows);
    })
});