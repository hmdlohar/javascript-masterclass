let gender = process.argv[2];

switch (gender) {
  case "male":
    console.log("You are Male");
    break;
  case "female":
    console.log("You are Female");
    break;
  default:
    console.log("I don't know about you");
}
