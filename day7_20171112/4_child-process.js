const cp = require('child_process');
// console.log(__dirname);
cp.exec('mysql -uroot < ' + __dirname + '/scott.sql', (err, stdout, stderr) => {
    if (err) throw err;
    console.log(stdout);
});