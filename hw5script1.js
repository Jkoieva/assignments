const car1 = {
    colour: "white",
    model: "Polo",
    brand:"Volkswagen",
}

console.log(car1.model)

const person = {
    name: function(name){
        return(name)
    },
    age: function(age){
        return(age)
    },
    sex: "male",
}

console.log(person.name('Ihor'), person.age('25'), person.sex)

const comment = {
    'is published': true,
    'has votes': false,
}

console.log(comment['is published'])