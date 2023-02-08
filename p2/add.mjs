// var prompt = require('prompt-sync')();
import promptSync from "prompt-sync";
const prompt = promptSync();

const a = Number(prompt("Enter Number A: "));
const b = Number(prompt("Enter Number B: "));
console.log("Sum =", a + b);
