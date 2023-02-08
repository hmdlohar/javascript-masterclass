function dec2bin(dec) {
  let result = dec;
  let binStr = "";
  while (result > 0) {
    let reminder = result % 2;
    binStr = reminder + binStr;
    result = Math.floor(result / 2);
  }
  return binStr;
}

console.log(dec2bin(50));
