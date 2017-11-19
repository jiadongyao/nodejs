const fs = require('fs');

fs.appendFile(__dirname + '/some_file', 'append...', (err) => {
    if (err) throw err;
})