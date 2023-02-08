function longest(string) {
  let max = 0;
  let currentChar = "";
  let currentCount = 0;
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if (currentChar === char) {
      currentCount++;
    } else {
      if (currentCount > max) {
        max = currentCount;
      }
      currentChar = char;
      currentCount = 1;
    }
  }
  if (currentCount > max) {
    max = currentCount;
  }
  return max;
}

console.log(longest("aaBBcDDDDDDeeFFFFFFFF"));
