//ECMA SCRIPT 6  EXAMPLE
//GENERATORS EXAMPLES
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

/* ----------------------------------------- */
var letter, alphabet, sequence;
 
function* alphabet() {

    var charCode = 65;

    while (charCode < 91) {
        yield String.fromCharCode(charCode++);
    }
};

sequence = alphabet(),
letter = sequence.next();
 
while (!letter.done) {
 
    // => A..Z
    console.log(letter.value);
    letter = sequence.next();
}
