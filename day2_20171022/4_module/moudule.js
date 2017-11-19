// module 模块

const circle = require('./circle');

console.log(circle.test(1.2));
console.log(circle.perimeter(1.2));

console.log(__filename);
console.log(__dirname); // Ctrl(+Shift) + W (word)