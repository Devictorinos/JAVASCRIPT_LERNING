var Car = function() {
    var args  = Array.prototype.slice.call(arguments);

    this.name = args[0] || "tesla",
    this.mpg  = args[1] || 100,
    this.mph  = args[2] || 80

    // => Volt
    console.log(this.name);
    // => 90
    console.log(this.mpg);
    // => 80
    console.log(this.mph);
};

new Car('volt', 90);
console.log("------------------>");
var user = {
isAdmin: function() {

    return !!this.admin
    }
};
// undefined this.admin is coerced to false
// then inverted to true
// then inverted again to false
// => false
console.log(user.isAdmin());
user.admin = true;
// this.admin is true without coercion
// inverted to false
// inverted back to true
// => true
console.log(user.isAdmin());
user.admin = false;
// => false
console.log(user.isAdmin());
