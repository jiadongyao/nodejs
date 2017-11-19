console.log('start...'); // 1
// try {
    setImmediate(() => {
        // console.log('set immediate...'); // 3
        test;
    });
// } catch (err) {
    // console.log(err);
// }
console.log('end...'); // 2

process.on('uncaughtException', (err) => {
    console.error(err);
});
