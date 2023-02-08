const lstStudent = [
  {
    name: "Hamid",
    age: 25,
    marks: {
      hindi: 34,
      english: 100,
    },
  },
  {
    name: "Adie",
    age: 20,
    marks: {
      hindi: 50,
      english: 40,
    },
  },
  {
    name: "Sajiya",
    age: 13,
    marks: {
      hindi: 80,
      english: 44,
    },
  },
  {
    name: "Amad",
    age: 55,
    marks: {
      hindi: 20,
      english: 12,
    },
  },
  {
    name: "Sandeep",
    age: 55,
    marks: {
      hindi: 41,
      english: 12,
    },
  },
];

let max = lstStudent[0]

for (let objStudent of lstStudent) {
  objStudent.total = objStudent.marks.hindi + objStudent.marks.english;
  if(objStudent.total > max.total){
    max = objStudent;
  }
}

console.log(max);
