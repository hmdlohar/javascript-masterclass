function bin2dec(bin) {
  let dec = 0;
  for (let i = 0; i < bin.length; i++) {
    let position = bin.length - i - 1;
    if (bin[position] === "1") {
      dec += power(2, i);
    }
  }
  return dec;
}

function power(n, p) {
  let ans = 1;
  for (let i = 0; i < p; i++) {
    ans *= n;
  }
  return ans;
}

console.log(bin2dec("10101"));
