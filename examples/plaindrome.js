function palindrome(pali) {
    let half = Math.floor(pali.length / 2)
    for (let i = 0; i < half; i++) {
        let r = pali.length - i - 1;
        if (pali[i] !== pali[r])
            return false
    }
    return true
}

console.log(palindrome('racecar'))
console.log(palindrome('otto'))