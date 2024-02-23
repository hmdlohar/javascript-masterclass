let lstStudent = [
    {
        name: "hamid",
        age: 20,
        subjects: ["math", "english"]
    },
    {
        name: "samir",
        age: 44,
        subjects: ["hindi", "english"]
    },
];

console.log(`Name \t\t\t Age \t\t\t Subjects`)
for (let objStudent of lstStudent) {
    console.log(`${objStudent.name} \t\t\t ${objStudent.age} \t\t\t ${objStudent.subjects}`)
}