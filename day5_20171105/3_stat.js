const fs = require('fs');

fs.stat(__filename, (err, stat) => {
    console.log(stat);
    console.log(stat.isFile());
    console.log(stat.isDirectory());
});
fs.stat(__dirname, (err, stat) => {
    console.log(stat);
    console.log(stat.isFile());
    console.log(stat.isDirectory());
});