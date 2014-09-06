;function outer (name) {
    var hello = "Hi";
    var inner;

    return inner = function() {
        return hello + " " + name; 
    };
}

// ecmascript 6 example for now only work in mozilla
/*;var outer (name) => {
    var hello = "hi",
    inner;
 
    inner => hello + " " + name;
}
*/


var name  = outer("mark")();

console.log(name);

console.log("================================>");

var car;
function carFactory (kind) {
    var wheelsCount, start;

    wheelsCount = 4;

    start = function () {
        console.log('started with ' + wheelsCount + ' wheels');
    };

    return ( function () {
        return {
            make: kind,
            wheels: wheelsCount,
            startEngine: start
        };
    }());
}

car = carFactory('Tesla');
console.log(car.make);

//started with wheels
car.startEngine();

console.log("================================>");


var Car, proxy, tesla;

Car2 = function () {
    this.start = function () {
        return console.log("car started");
    };

    this.turnKey = function () {
        var carKey;

        carKey = document.getElementById('carKey');

        carKey.onclick = proxy(function (event) {

            this.start();
        }, this);
        
        return this;
    };

    proxy = function () {
        return callback.apply(self, arguments);
    };

}

tesla2 = new Car2();
 
// Once a user click's the #carKey element they will see "car started"
tesla2.turnKey();
