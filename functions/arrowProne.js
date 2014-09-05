// Option 1: Use a local free variable to bypass the need to reference this.
;var VendingMachine = function () {
    this.stock = ["Pepper", "Choke", "Spike"];

    var that = this;

    return {

        dispence: function() {

            if (that.stock.length > 0) {
                return that.stock.pop();
            };
        }
    }



}

var shop = new VendingMachine();

console.log(shop.dispence());

// Option 2: Use a bound function to reference this.
var VendingMachine2 = function () {

    this.stock = ["Sgt. Pepper", "Choke", "Spite"];

    var dispense = function () {

        if (this.stock.length > 0) {
            return this.stock.pop();
        }
    };

    return {
        dispense: dispense.bind(this)
    };
};
 
var popMachine = new VendingMachine2();
 
// => 'Spite'
console.log(popMachine.dispense());


// Option 3: Use a fat arrow to supply the lexical this. ECMASCRIPT 6
/*var VendingMachine3 = function () {
    this.stock = ["Sgt. Pepper", "Choke", "Spite"];
    return {
        dispense: () => {
            if (this.stock.length > 0) {
                return this.stock.pop();
            }
        }

var popMachine2 = new VendingMachine3();
 
// => 'Spite'
console.log(popMachine2.dispense());*/