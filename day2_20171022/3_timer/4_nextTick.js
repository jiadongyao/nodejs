// tick

process.nextTick(() => {
    console.log('next tick...');
});

console.log('Game over...');