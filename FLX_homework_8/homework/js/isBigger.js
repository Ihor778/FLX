function isBigger(a, b) {
    let c = null;
    (a > b) && (c = a);
    (a < b) && (c = b);
    return c;
}

isBigger(5, -1);
