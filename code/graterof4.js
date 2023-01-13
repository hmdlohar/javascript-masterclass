let a = Number(process.argv[2]);
let b = Number(process.argv[3]);
let c = Number(process.argv[4]);
let d = Number(process.argv[5]);

if (a>=b && a>=c && a>=d) {
    console.log("A is great")
}
else if (b>=c && b>=d) {
    console.log("B is great")    
}
else if (c>=d) {
    console.log("C is great")
}
else {
    console.log("D is great");
}
