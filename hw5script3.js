const learner = {
    form: "9",
    school: "100"
}

const learnerGrade = {
    grade: "A",
    __proto__: learner
}

console.log(learnerGrade.__proto__)

const teacherClass = {
    form: "10",
    school: "75"
}

const teacherName = Object.create(teacherClass)

console.log(Object.keys(teacherClass))
console.log(Object.keys(teacherName))
