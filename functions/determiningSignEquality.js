/* togglig state of an object */

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
