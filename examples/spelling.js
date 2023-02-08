let dict = { // HashMap
  i: "i",
  am: "am",
  to: "to",
  explain: "explain",
  hello: "hello",
  world: "world",
};

let input = "Hello worid i am here to explain javascript";
let words = input.split(" ").map((item) => item.toLowerCase());
words.forEach((item) => {
  if (!dict[item]) {
    console.log(`${item} is wrong`);
  }
});
