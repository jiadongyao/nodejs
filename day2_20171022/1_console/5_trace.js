function f1() {
    console.trace('f1');
}
function f2() {
    f1();
}
function f3() {
    f2();
}

f3();