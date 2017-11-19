const mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit: 10,
    user: 'root',
});

pool.getConnection((err, connection) => {
    if(err) throw err;
    connection.query('select e.ename, d.dname from scott.emp e INNER JOIN scott.dept d ON e.deptno=d.deptno', (err, results, fields) => {
        if(err) throw err;
        console.log(results.length);
        connection.release();
    })
});