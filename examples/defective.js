function keyboardError(correct, wrong) {
    let ary = []
    for (let i = 0; i < correct.length; i++) {
        if (correct[i] !== wrong[i]) {
            if(!ary.some(item=>item=== correct[i])){
                ary.push(correct[i])
            }
        }
    }
    return ary;
}

console.log(keyboardError('foobar', 'fiibnr'))