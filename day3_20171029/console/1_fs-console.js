const fs = require('fs');
// const Console = console.Console;
const Console = require('console').Console;

const out = fs.createWriteStream('./out.log');
const out = fs.createWriteStream('./err.log');

const logger = new Console(out, err);

logger.log('log1...');
logger.error('err1...');

console.log('log2...');
console.error('err2...');