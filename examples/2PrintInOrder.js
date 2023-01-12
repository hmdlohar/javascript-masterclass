let ary = process.argv.slice(2).map(item=>Number(item)).sort((a,b)=>a-b)
console.log(ary.join(" "))
