// String as input. and make first char uppercase
function cap(str) {
  return str[0].toUpperCase() + str.substr(1);
}

let s = "i am hamid lohar";
let arr = s.split(" ");
console.log(arr);
for (let index in arr) {
  arr[index] = cap(arr[index]);
}
console.log(arr);

let final = arr.join(" ")
console.log(final)

