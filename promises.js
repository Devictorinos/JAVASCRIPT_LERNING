// CPS style
var user;
var user1;
var promise;
function login (a, b, callback) {

    if (a === "user" && b === "password") {
        
        return callback;

    };

}

function login1 (a, b) {

    if (a === "user" && b === "password") {

        var promise = {

            then: function (callback) { 

            
                return callback;
        
            }
        };

        

        return promise;

    };

}

var result = {};
result.ok = "ok";
result.user = "Victor";

login('user', 'password', function (result) {

    if (result.ok) {

       
        user = result.user;

    }

}(result));

console.log(user)

// Promise style and assumes login returns a promise object.
promise = login1('user', 'password');

promise.then(function (result) {

    if (result.ok) {

   user1 = result.user;

    }

}(result));

console.log(promise)
console.log(user1)
