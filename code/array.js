array.reduce(callback, [initialValue])

function(accumulator, currentValue) {
    // your code here
}


let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // 15


let numbers = [2, 3, 4, 5];
let product = numbers.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue;
}, 1);
console.log(product); // 120


let words = ['Hello', ' ', 'world!'];
let sentence = words.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, '');
console.log(sentence); // "Hello world!"


let persons = [{name: "Alex", age: 30}, {name: "Bob", age: 25}, {name: "Chris", age: 35}];
let ages = persons.reduce(function(accumulator, currentValue) {
    return accumulator.concat(currentValue.age);
}, []);
console.log(ages); //[30, 25, 35]
