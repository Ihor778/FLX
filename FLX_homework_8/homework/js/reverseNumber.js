function reversNumber(n) {
  var x = 0;
  if (n < 0) {
    while (n < 0) {
      x = x * 10 + n % 10;
      n = ~~(n / 10);
    }
  }
  while (n > 0) {
    x = x * 10 + n % 10;
    n = ~~(n / 10);
  }
  return x
}

reversNumber(-456);
