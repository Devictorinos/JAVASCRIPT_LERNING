var Money = function (val, sym) {
this.currencySymbol = sym;
this.cents = val;
};
var dollar = new Money(100, '$');
// Not helpful
// => NaN
console.log(+dollar);
// Not helpful
// => Total: [object Object]
console.log("Total: " + dollar);
Money.prototype.toString = function () {
return this.currencySymbol + (this.cents / 100).toFixed(2);
};
Money.prototype.valueOf = function () {
return this.cents;
};
// Helpful!
// => 100
console.log(+dollar);
// Wait what?! I wanted $1.00
// => 100
console.log(dollar + '');

// Now I am totally confused!
// => $1.00
console.log([dollar] + '');