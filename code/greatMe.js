let time = Number(process.argv[2]);

if (time < 12) {
  console.log("Good Morning");
} else if (time <= 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Night");
}

console.log("End ");

// console.log(time);
