function multiply(n1, n2) {
  return n1 * n2;
}

function square(n) {
  return multiply(n, n);
}

function printSquare(n) {
  let s = square(n);
  console.log("Square: ", s);
}

printSquare(5)