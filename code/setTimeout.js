function print() {
  console.log("Hello after 1 second.");
}
setTimeout(print, 1000);

setTimeout(function () {
  console.log("Hello after 1 second.");
}, 1000);

const print2 = () => {
  console.log("Hello after 1 second.");
};
setTimeout(print, 1000);

setTimeout(() => {
  console.log("Hello after 1 second.");
}, 60000);

let a = max([5,6,82,3,62])
console.log("max",a)
