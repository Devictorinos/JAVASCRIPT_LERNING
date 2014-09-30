var user = {
        sayName: function (jhjgh) {

            console.log(this.name);
            
        }

      };

user.name = 'viktor';

user.sayName();

var user2 = Object.create(user);

    user2.name = "segey";
    user2.sayName();

function foo (a, b) {
    return 42;
}

foo.bar = "vik";

var foo2 = foo;

foo2.bar = "vik2";

console.log(foo2);

console.log(foo.bar);

