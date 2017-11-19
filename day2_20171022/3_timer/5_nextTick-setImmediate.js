console.log('game start...'); // 1.

process.nextTick(() => {
    console.log('next tick...'); // 3.
});

setImmediate(() => {
    console.log('set immediate...'); // 4.
});

console.log('game over...'); // 2.