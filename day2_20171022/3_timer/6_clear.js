let count = 0;

let timer = setImmediate(function () {
    console.log(count++);
    if (count < 5) { // Ctrl + Alt + T
        setImmediate(arguments.callee); // arrow function has no arguments
    } else {
        clearImmediate(timer);
    }
});