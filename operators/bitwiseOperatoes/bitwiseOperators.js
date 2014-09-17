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
