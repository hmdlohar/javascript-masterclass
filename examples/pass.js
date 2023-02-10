function checkPassword(password, password_repeat) {
    // - both passwords must match
    if (password !== password_repeat)
        return false

    // - password must be at least 8 chars
    if (password.length < 8)
        return false

    // - contains at least a number
    if (!isContainNumber(password))
        return false

    // - contains at lease an uppercase letter
    if (!isContainLowerCase(password))
        return false
    // - contains at least a lowercase letter
    if (!isContainUpperCase(password))
        return false
    // - contains at least one of these special chars (&$%§-_)
    if (!isSpecialSynbol(password))
        return false

    return true;
}

function isContainNumber(str) {
    for (let s of str) {
        if (!Number.isNaN(Number(s)))
            return true
    }
    return false
}

function isContainLowerCase(str) {
    for (let s of str) {
        if (s === s.toLowerCase())
            return true
    }
    return false
}


function isContainUpperCase(str) {
    for (let s of str) {
        if (s === s.toUpperCase())
            return true
    }
    return false
}

function isSpecialSynbol(str) {
    let ss = '&$%§-_'
    for (let s of str) {
        if (ss.includes(s))
            return true
    }
    return false
}


console.log(checkPassword('Joifd$3', 'Joifd$3'))