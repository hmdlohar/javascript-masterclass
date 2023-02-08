function camelCase(n) {
  let words = n.trim().split(" ");
  let str = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === 0) continue;
    if (i === 0) {
      str += `${words[i][0].toLowerCase()}${words[i].slice(1)}`;
    } else {
      str += `${words[i][0].toUpperCase()}${words[i].slice(1)}`;
    }
  }
  return str;
}

console.log(camelCase(' Is not found '));
