function pipe() {
    let x = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] === addOne) {
            x = addOne(x);
        }
    }
    return x;
}
function addOne(x) {
    return x + 1;
}

pipe(1, addOne, addOne);