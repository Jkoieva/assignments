let person = {
    name:"Julia",
    surname:"Koieva"
}

let engineer = {
    experience: "3",
    salary: "3000",
    __proto__:person
}

let qaEngineer = Object.create(engineer)

console.log(engineer)
console.log(qaEngineer)

qaEngineer.experience = "2"
qaEngineer.salary = "2000"

console.log(qaEngineer)


console.log(qaEngineer.name)