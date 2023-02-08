let kids = [
  { name: "Disha", age: 15, gender: "female" },
  { name: "Ashish", age: 10, gender: "male" },
  { name: "Aisha", age: 7, gender: "female" },
  { name: "Vikas", age: 5, gender: "male" },
  { name: "Alia", age: 12, gender: "female" },
];

let boys = kids.filter((boy) => {
  return boy.gender === "male";
});
let girls = kids.filter((girl) => girl.gender === "female");

boys = boys.map((boy) => {
  boy.shoes = true;
  return boy;
});

girls = girls.map((girl) => {
  girl.makeup = true;
  return girl;
});

let readyKids = girls.concat(boys);

readyKids = readyKids.map((kid) => {
  kid.money = 20;
  kid.expense = kid.age;
  kid.remainingAmount = kid.money - kid.expense;
  return kid;
});

let sum = readyKids.reduce((a, kid) => a + kid.remainingAmount, 0);
console.log(sum, "sum");
