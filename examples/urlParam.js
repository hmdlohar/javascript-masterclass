function getURLParams(url) {
    let ary = [];
    let params = url.split("?")[1]
    if (params) {
        let kv = params.split('&')
        ary = kv.map(k=>k.split("=")[1])
    }

    return ary
}

console.log(getURLParams('https://jscodebox.com/'))