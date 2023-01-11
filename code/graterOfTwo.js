let a = Number(process.argv[2]);
let b = Number(process.argv[3]);
let c = Number(process.argv[4]);

if (a > b) {
  if (a > c) {
    console.log("A is greatest");
  } else {
    console.log("C is greatest");
  }
} else {
  if (b > c) {
    console.log("B is greatest");
  } else {
    console.log("C is greatest");
  }
}
