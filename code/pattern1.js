let n = 5;
let str = "";
for (let i = 5; i >= 1; i--) {
  for (let k = 0; k < n - i; k++) {
    str += " ";  
  }
  for (let j = i; j >= 1; j--) {
    str += j;
  }
  str += "\n";
}
console.log(str);
