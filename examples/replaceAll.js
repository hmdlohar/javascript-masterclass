function bugFixFinal(string) {
  let str = string;
  for (; str.includes("bug"); ) {
    str = str.replace("bug", "flower");
  }
  return str;
}

console.log(bugFixFinal("xxbugXbugbugYYy"));
