function fact(n) {
  if (n === 1) return 1;
  return n * fact(n - 1);
}

let f =fact(5);
console.log(f)
