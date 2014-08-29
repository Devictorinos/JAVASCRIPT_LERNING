var car = {};

Object.defineProperty(car, 'doors', {
   configurable: true,
   value: 4
});

Object.defineProperty(car, 'wheels', {
    configurable: false,
    value: 4
});


//deletting car doors property
delete car.doors;//delete is succes becouse the property isd set to -configurable - true

console.log(car.doors);// put put is undefined


delete car.wheels;//deleting car wheels - can't be deletted if set configurable false

car.wheels = 6;// trying to redifine - it be false and stay 4
console.log(car.wheels);// output is 4


Object.defineProperty(car, 'doors', {
    configurable: true,
    value: 5
});
// getting error, that we can redifine a object property
/*Object.defineProperty(car, 'wheels', {
    configurable: false,
    value: 5
});
*/