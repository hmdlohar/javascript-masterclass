let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4, 6]



let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]



let numbers = [1, 2, 3, 4, 5];
let doubleNumbers = numbers.map(function(num) {
    return num * 2;
});
console.log(doubleNumbers); // Output: [2, 4, 6, 8, 10]


let numbers = [1, 2, 3, 4, 5];
let doubleNumbers = numbers.map(num => num * 2);
console.log(doubleNumbers); // Output: [2, 4, 6, 8, 10]


let people = [
  {name: "John", age: 25},
  {name: "Jane", age: 30}
];
let names = people.map(person => person.name);
console.log(names); // Output: ["John", "Jane"]


