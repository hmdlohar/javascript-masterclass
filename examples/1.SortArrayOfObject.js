const lstStudent = 
[
    {
        name: "Hamid",
        age: 25
    },
    {
        name: "Adie",
        age: 20
    },
    {
        name: "Sajiya",
        age: 13
    },
    {
        name: "Amad",
        age: 55
    }
]

// // Sort by age
// lstStudent.sort((a, b)=>{
//     return b.age - a.age; // 0, +ive, -ive
// })

lstStudent.sort((a, b) => {
    if (b.name > a.name) return 1;
    else if (b.name < a.name) return -1;
    return 0;
});

console.table(lstStudent);
