function repeater(string, n) {
  let str = "";
  for (let i = n; i > 0; i--) {
    str += string.slice(0, i);
  }
  return str;
}

console.log(repeater("Hello coder!", 5));
