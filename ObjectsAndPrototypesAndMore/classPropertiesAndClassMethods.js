var Cake = function() {};
Cake.isLie = true;

var test  = new Cake();

console.log(test.isLie);// output will be undefined
console.log(Cake.isLie);// output will be true

console.log('----------------->');

String.reverse = function (string) {
    return string.split('').reverse().join('');
}

console.log(String.reverse('Victor'));

