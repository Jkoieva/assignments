let carFuel = 'gas'||'diesel'
 carSize = 'S'||'M'||'L'||'XL'
function myFunc(carFuel='diesel', carSize='XL'){
    let sizeMessage;
    switch (carSize){
        case 'S':
            sizeMessage = 'S авто'
            break
        case 'M':
            sizeMessage = 'M авто'
            break
        case 'L':
            sizeMessage = 'L авто'
            break
        case 'XL':
            sizeMessage = 'XL авто'
            break
        default:
            sizeMessage = 'невідомий тип авто'
    }
    let fuelMessage
    switch (carFuel){
        case 'gas':
        fuelMessage = 'Тип палива gas'
        break
        case 'diesel':
        fuelMessage = 'Тип палива diesel'
        break
        default:
        fuelMessage = 'Невідомий тип палива'
}
console.log(fuelMessage, sizeMessage)
}

myFunc('gas','S')
myFunc('diesel', 'S')
myFunc('gas', 'M')
myFunc('diesel', 'M')
myFunc('gas', 'L')
myFunc('diesel', 'L')
myFunc('gas', 'XL')
myFunc('diesel', 'XL')
myFunc()
myFunc('k','i')

