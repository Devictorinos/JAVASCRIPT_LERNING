var sum = function() {
    var leng = arguments.length,
    total = 0;

    for (var x = 0; x< leng; x++) {
        total += arguments[x];

        console.log(x);
    }

    return total;
}

console.log(sum(1, 2, 3, 4, 5));



var sum2 = function() {
    var total = 0;

    while (arguments.length > 0) {
        total += arguments.pop();
    }

    return total;
}

//sum2(1, 2, 3);// error the arguments is like pseudo array

/* ECMASCRIPT 6 NEW ARGUMENTS EMPROVMENT */

/*var join = function(foo = 'foo', baz = (foo === 'foo') ? join(foo + '!') : 'baz') {
    return foo + " : " + baz;
}*/


var Dispacher = {
    join: function(before, after) {
        return before + " : " + after;
    },

    sum: function() {
        var args = Array.prototype.slice.call(arguments);
        console.log(args + " args");
        return args.reduce(function (previousValue, currentValue, index, array) {
            console.log(previousValue + " prev")
            console.log(currentValue + " cur")
            console.log(index + " index")
            console.log(array + " array")
            console.log(previousValue + currentValue + " return")
            console.log("----------------------");

            return previousValue + currentValue;
        });
         
    }
};



var Proxy = {
    relay: function (method) {
    var args; 
    args = Array.prototype.splice.call(arguments, 1);
    return Dispacher[method].apply(Dispacher, args);
    }
};


console.log(Proxy.relay('join', 'bar', 'baz'));
console.log(Proxy.relay('sum', "b", "c", "d", "f"));