// Obejct only
let objStudent = {
    name: "hamid",
    age: 20
}

// Array only
let subjects = ["math", "english",]

// One student can have many subjects. 
// Array inside object
let objStudent2 = {
    name: "hamid",
    age: 20,
    subjects: ["math", "english"]
}

// There are many students in school. 
//How should we store all their information inside a single reference
//Array of object. (List)
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

// If we refer lstStudent[0]. we will get
// {
//     name: "hamid",
//     age: 20,
//     subjects: ["math", "english"]
// }
