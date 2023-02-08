var prompt = require("prompt-sync")();

let email = prompt("Enter your email: ").trim();
console.log(email);

if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
  console.log("valid");
} else console.log("invalid");
