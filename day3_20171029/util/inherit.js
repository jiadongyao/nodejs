const util = require('util');
function Sup() {
    this.name = 'Tom';
    this.dob = '1999'; // date of birth
    this.hello = function () {
        console.log('Hi, ' + this.name);
    };
}
Sup.prototype.sayName = function () {
    console.log('My name is ' + this.name);
};
function Sub() {
    this.name = 'Jerry';
}
util.inherits(Sub, Sup); // *****
let objSup = new Sup();
let objSub = new Sub();
// objSup.hello();
// objSup.sayName();
// objSub.hello();
// objSub.sayName();

console.log(objSup);
console.log(objSub);