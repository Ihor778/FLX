function isSmaller(a, b) {
    let c = null;
    (a > b) && (c = b);
    (a < b) && (c = a);
    return c;

}
isSmaller(5, -1);