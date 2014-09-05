//lexical scope;

var iAmFree = "I am Free!";

function canHazAccess (notFree) {
    var notSoFree = "Not so free!";
}

console.log(iAmFree);


//console.log(notSoFree);// error, because of an variable is not in global scope
canHazAccess();


function foo () {
    var x = 5;

    function foo2 () {
        var y = 6;
    }

    console.log(x+y);
}

foo();
