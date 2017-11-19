const fs = require('fs');

try {
    fs.readFile(__filename, (err, data) => {
        test;
        console.log(data.toString());
    });
} catch (err) {
    console.log(err);
}

process.on('uncaughtException', (err) => {
    console.log(err);
});
