//ECMA SCRIPT 6  EXAMPLE
var sequence, sq;

sq = function* (initialValue) {

    var current, num, step;

    num  = initialValue || 2;
    step = 0;

    while (true) {

        current = num * step++;
        yield current;
    };

};

sequence = sq(20);

console.log(sequence.next().value);
 
// => 20
console.log(sequence.next().value);
