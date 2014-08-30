var Car = function (wheelCount) {
    this.odometer = 0;
    this.wheels = wheelCount || 4;
};
Car.prototype.drive = function (miles) {
    this.odometer += miles;
    return this.odometer;
};

var tesla = new Car();

console.log(Object.getPrototypeOf(tesla) === Car.prototype);

var isetta = new Car(3);

isetta.drive = function(miles) {
    this.odometer -= miles
    return this.odometer;
}

console.log(isetta.drive(10));
console.log(tesla.drive(10));

Car.prototype.drive = function(miles) {
    this.odometer += miles * 2;
    return this.odometer;
}

Car.prototype.odometer = 0;// no changes because the property is set inside the objec and not in his prototype

console.log(isetta.drive(10));
console.log(tesla.drive(10));

console.log("-------------------------------------");

var Car2 = function (wheelCount) {
    this.wheels = wheelCount || 4;
};
Car2.prototype.odometer = 0;
Car2.prototype.drive = function (miles) {
    this.odometer += miles;
    return this.odometer;
};
var tesla2 = new Car2();
Car2.prototype.odometer = 200;

console.log(tesla2.drive(10));
Car2.prototype.odometer = 2000;// changes not take effect because we all ready set a local odometer property with drive() function
console.log(tesla2.drive(10)); 