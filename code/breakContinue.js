let aryNames = ["Yubraj", "Alkesh", "Sachin", "Rahul", "Janvi", "Shiva"];

for (let name of aryNames) {
  if (name === "Alkesh") continue;
  console.log("Checking ", name);
  if (name === "Rahul") {
    console.log("Rahul mil gaya");
    break;
  }
}
