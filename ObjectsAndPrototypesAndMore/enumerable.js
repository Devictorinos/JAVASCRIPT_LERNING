var car = {};

Object.defineProperty(car, 'doors', {
    configurable: true,
    writable: true,
    enumerable: true,
    value: 4
});

Object.defineProperty(car, 'wheels', {
    configurable: true,
    writable: true,
    enumerable: true,
    value: 4
});


Object.defineProperty(car, 'secretTrackingDeviceEnabled', {
    enumerable: false,
    value: true
});

for(var propr in car) {
    console.log(propr);
}

console.log(Object.keys(car));

console.log(Object.getOwnPropertyNames(car));
console.log(car.propertyIsEnumerable('secretTrackingDeviceEnabled'));

