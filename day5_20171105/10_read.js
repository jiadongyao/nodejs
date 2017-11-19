const fs = require('fs');

fs.open(__dirname + '/some_file', 'r', (err, fd) => {
    if (err) throw err;
    let buffer = Buffer.alloc(3);
    fs.read(fd, buffer, 1, 2, 1, (err, bytesRead, buffer) => {
        if (err) throw err;
        console.log(bytesRead);
        console.log(buffer.toString());
        fs.close(fd);
    });
    console.log(buffer);
});

process.on('uncaughtException', (err) => {
    console.log(err);
});