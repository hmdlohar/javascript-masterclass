function countMe(string) {
    let count = 0;
    let str = string.split("x")[0]
    while (str.includes("Me")) {
        count++
        str = str.replace("Me", "")
    }
    return count
}

console.log(countMe('MeixsyouMe'))