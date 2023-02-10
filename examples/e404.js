function either404(numbers) {
    let is4Repeat = false;
    let is0Repeat = false;
    numbers.forEach((n, index) => {
        if (n === 4 && numbers[index + 1] === 4)
            is4Repeat = true
        if (n === 0 && numbers[index + 1] === 0)
            is0Repeat = true
    })

    if (is4Repeat && is0Repeat) {
        return false;
    }
    if (is4Repeat || is0Repeat) {
        return true;
    }

    return false

}

console.log(either404([1, 4, 4, 0, 2, 0, 9])
)