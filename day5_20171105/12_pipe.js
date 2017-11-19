const fs = require('fs');

let reader = fs.createReadStream('./some_file');
let writer = fs.createWriteStream('./test_file');

reader.pipe(writer);

reader.on('end', () => {
    console.log('copy done.');
});