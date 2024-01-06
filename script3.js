const object = 
{colour: 'white',
 model: 'Tiguan',
 price: '50000',
 calcPricePlus200: function (price) {
        return price + 200
 }
}

console.log(object.calcPricePlus200(10000), object.colour)