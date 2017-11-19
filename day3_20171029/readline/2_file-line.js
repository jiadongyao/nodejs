const fs = require('fs');
const readline = require('readline');

let file = process.argv[1];

readline.createInterface({
    input: fs.createReadStream(file),
    terminal: false
}).on('line', (line) => {
    console.log(line);
});