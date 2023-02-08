function gHappy(str) {
  let isHappy = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "g") {
      if (str[i - 1] === "g" || str[i + 1] === "g") {
        isHappy = true;
      } else {
        isHappy = false;
        break;
      }
    }
  }
  return isHappy;
}

console.log(gHappy("garage of eggs"));
