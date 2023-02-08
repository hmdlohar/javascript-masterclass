var prompt = require("prompt-sync")();

let tempName = prompt("Enter your name: ");
let name = tempName.trim()
console.log(name, name.length);
