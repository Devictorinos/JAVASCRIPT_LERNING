/*declaration();
function declaration() {
  console.log("declaration");
}

//expression();
var expression = function() {
  console.log("expression");
}

function sayHi() {
  console.log("hi");
}

var hi = function sayHi() {
  console.log("hi");
}

sayHi();
hi();*/



console.log("-----------");

var sayHo;

if (true) {

    function sayHey() {
      console.log("hey");
    }

    sayHo = function sayHo() {
      console.log("ho");
    }
} else {
    function sayHey() {
      console.log("no");
    }
         
    sayHo = function sayHo() {
      console.log("no");
    }
}

// => no
sayHey();
 
// => ho
sayHo();