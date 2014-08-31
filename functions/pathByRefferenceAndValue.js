var object = { foo: 'bar' };
var num = 1;

//passed by reference 
;!function(obj) {
    obj.foo = 'baz';
}(object);

console.log(object);

//passed by value
;!function(num) {
    num = 2;
}(num);

console.log(num)

