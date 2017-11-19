const fs = require('fs');

fs.writeFile(__dirname + '/some_file', 'new data...', (err) => {
    if(err) throw err;
})