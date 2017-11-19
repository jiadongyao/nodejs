console.time('total time: ');
let sum = 0;
for(let i = 0; i < 10000; i++) {
    sum += i;
    console.log(sum);
}
console.log(`sum: ${sum}`);
console.timeEnd('total time: ');