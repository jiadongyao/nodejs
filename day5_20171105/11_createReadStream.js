const fs = require('fs');

let reader = fs.createReadStream(__filename);

reader.on('data', (chunk) => {
    console.log(chunk.toString());
});

reader.on('end', () => {
    console.log('end...');
});

console.log('game over...');