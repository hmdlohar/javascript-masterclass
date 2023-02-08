let kids = [
  { name: "Disha", age: 15, gender: "female" },
  { name: "Ashish", age: 10, gender: "male" },
  { name: "Aisha", age: 7, gender: "female" },
  { name: "Vikas", age: 5, gender: "male" },
  { name: "Alia", age: 12, gender: "female" },
];
// Array.filter()
let boys = [];
for (let kid of kids) {
  if (kid.gender === "male") boys.push(kid);
}
let girls = [];
for (let kid of kids) {
  if (kid.gender === "female") girls.push(kid);
}

// Array.map()
for (let boy of boys) {
  boy.shoes = true;
}

for (let girl of girls) {
  girl.makeup = true;
}

let readyKids = girls.concat(boys);

for (let kid of readyKids) {
  kid.money = 20;
  kid.expense = kid.age;
  kid.remainingAmount = kid.money - kid.expense;
}

// Array.reduce()
let sum = 0;
for (let kid of readyKids) {
  sum += kid.remainingAmount;
}

console.log("total remaining amount", sum);
