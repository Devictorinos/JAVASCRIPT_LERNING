var Money = function (val, sum) {
    this.currencySymbol = sum;
    this.cents  = val;
}

var dollar = new Money(100, '$');

console.log(dollar);
console.log('Total ' + dollar);

Money.prototype.toString = function() {

    return this.currencySymbol + (this.cents / 100).toFixed(2);
};

Money.prototype.valueOf = function () {
    return this.cents;
}

console.log(+dollar);
console.log(dollar + '');
console.log([dollar] + '');



console.log("-----------------test2");

var ToPrimitive;
ToPrimitive = function (obj) {
    var func, functions, _i, _len;

    functions = ['valueOf', 'toString'];

    if (typeof obj === "object") {
        if (obj instanceof Date) {
            functions = ["toString", "valueOf"];
        };

        for (var _i = 0, _len = functions.length; _i < _len; _i++) {

            func = functions[_i];

            if (typeof obj[func] === "function") {

                val = obj[func]();

                if (typeof val === "string" || typeof val === "number" || typeof val === "bolean") {
                    return val;
                };
            };
        };

        throw new Error("DefaultValue is ambigious."); 
    };

    return obj;
}

console.log(ToPrimitive(new Date()));


console.log("-----------------test2");

var noConversions = [{
toString: "undefined"
}];
 
// => Uncaught TypeError: Cannot c
console.log(noConversions + '');