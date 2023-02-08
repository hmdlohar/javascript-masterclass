let ary = [
  "My name is Hamid",
  "My name Is Rahul",
  "My name iS Yubraj",
  "My name Is Akhilesh",
];

for (let str of ary) {
  let start = str.search(/is /i);
  console.log(str.slice(start + 3, str.length));
}
