const car = new Object()

car.size = 'small'
car.wight = 1
console.log(car)

delete car.size
console.log(car)

const table = new Object({size:"small"})

table.height = 90
table.width = 60

console.log(table)

const weather = new Object()
weather.wind = function(wind){
    return wind
}
weather.temperature = 25
console.log(Object.keys(weather))