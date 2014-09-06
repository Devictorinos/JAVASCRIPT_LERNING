//lexical scope;

var iAmFree = "I am Free!";

function canHazAccess (notFree) {
    var notSoFree = "Not so free!";
}

console.log(iAmFree);


//console.log(notSoFree);// error, because of an variable is not in global scope
canHazAccess();




var Car, tesla;
Car = function() {
        this.start = function() {
        console.log("car started");
    };
 

    this.turnKey = function() {
       var that = this;// creating bypass reference for this
       var carKey = document.getElementById('carKey');

        console.log(carKey);

        carKey.onclick = function(event) {

            that.start(); //it's work - that (this) belong to car object scope now
            //this.start(); // here THIS is now refered on a dom element carkey not to the objec car.
        };

    };
return this;
};
tesla = new Car();
// Once a user clicks the #carKey element they will see "Uncaught TypeError: Object has no method

//tesla.turnKey();