function fizzBuzz(start, end) {
    let ary = [];
    for (let i = start; i <= end; i++) {
        if (i % 3 === 0)
            ary.push("Fizz")
        else if (i % 5 === 0)
            ary.push("Buzz")
        else if (i % 5 === 0 && i % 3 === 0)
            ary.push("FizzBuzz")
        else
            ary.push(i)
    }
    return ary;
}

console.log(fizzBuzz(1, 5))