const os = require('os');

console.log(os.EOL.length);

console.log(os.hostname());

console.log(os.uptime() / 60); // Operating System
console.log(process.uptime());

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());
console.log(os.networkInterfaces());

console.log(os.constants.signals.SIGINT);
// Ctrl + Shift + U
console.log(os.constants.errno.EADDRINUSE);
// Ctrl + Shift + U