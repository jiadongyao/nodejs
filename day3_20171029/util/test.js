const util = require('util');

console.log(util.isArray([]));
console.log(util.isArray({}));

console.log(util.isRegExp(/asdf/));
console.log(util.isRegExp({}));