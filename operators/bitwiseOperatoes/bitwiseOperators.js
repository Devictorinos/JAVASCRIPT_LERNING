/* togglig state of an object  with bitwise XOR " ^ "  */

var Lite = {

    on: 0,
    toggle: function () {

        if (this.on ^= 1) {

            console.log("Lite On");

        } else {

            console.log("Lite Off");

        }

    }

};

Lite.toggle();
Lite.toggle();
Lite.toggle();
Lite.toggle();
Lite.toggle();
Lite.toggle();

/* bitwise NOT */

//9
console.log(~-10);
//-11
console.log(~10);
//18
console.log(2 * ~-10);
//-22
console.log(2 * ~10);

/* Parsing Strings into Numbers */
var num = "100.7";

console.log(parseInt(num,10) === ~~num);
console.log(~~num);


//Unicode for Variables
var \u1000 = {\u1001: function () {
return 'Unicode';
    }
};
// => 'Unicode'
console.log(\u1000.\u1001()); 
