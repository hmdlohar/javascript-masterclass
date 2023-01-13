let gender = process.argv[2];
let age = process.argv[3];

if (gender === "male" && age >= 18) {
  console.log("You are an Adult Male");
} else if (gender === "male" && age < 18) {
  console.log("You are an Minor Male");
}
if (gender === "female" && age >= 18) {
  console.log("You are an Adult female");
} else if (gender === "female" && age < 18) {
  console.log("You are an Minor female");
} else {
  console.log("I don't know about you");
}

(tenThP > 60 && hscP > 80) && eleP > 90

tenThP > 60 || hscP > 80 || eleP > 90

