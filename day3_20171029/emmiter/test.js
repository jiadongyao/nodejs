const eventEmitter = require('events');

let emitter = new eventEmitter();

let counter = 0;
emitter.once('test', (x) => {
    console.log(++counter);
    // console.log('x: ' + x);
});

emitter.emit('test', 'new');
emitter.emit('test', 'new');

