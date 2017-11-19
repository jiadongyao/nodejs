// hr high resolution

console.log(process.hrtime());

// nano-second 1ns = 10^-9s

let start = process.hrtime(); //
for (let i = 0; i < 10000; i++) {
    // ...
}
// let end = process.hrtime(); //
let diff = process.hrtime(start);

console.log(diff); // difference

let begin = process.hrtime();
setTimeout(() => {
    console.log('diff: ' + process.hrtime(begin));
}, 1000);