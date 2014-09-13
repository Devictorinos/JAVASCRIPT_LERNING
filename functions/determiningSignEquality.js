var signsMatch = function(x, y) {
return !((x ^ y) < 0);
};
// => false
console.log(signsMatch(10, -10));
// => true
console.log(signsMatch(0, 0));
// => true
console.log(signsMatch(0, -0));
// => true
console.log(signsMatch(-10, -10));
console.log(signsMatch(-5, 5));
