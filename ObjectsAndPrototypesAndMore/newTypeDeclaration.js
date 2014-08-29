//] Ilan Frumer: http://eclipsesource.com/blogs/2013/07/05/private-members-in-javascript/
//[21:37:09] Ilan Frumer: http://phrogz.net/JS/classes/OOPinJS.html
//[21:37:13] Ilan Frumer: http://phrogz.net/JS/classes/OOPinJS2.html


//var a = {}; a.__proto__ = Object.prototype; Object.call(a);
//var a = []; a.prototype = Array.prototype; Array.call(a);
//var a = new Object();
/* console.log(a);
 console.log(Object);*/
function Person (person){
  this.person = person;
};

Person.prototype.names = function() {
  return this.person;
}

function Status(status, person){
  Person.call(this, person);
  this.status = status;
};

Status.prototype =  Person.prototype;
Status.prototype.constructor = Status;

function Foo(status, person) {
  Status.apply(this, arguments);
}

Foo.prototype =  Status.prototype;
Foo.prototype.constructor = Foo;

Status.prototype.showStatus = function() {
  return this.status;
};

var employee = new Status('worker','Victor');
console.log(employee.names());
console.log(employee.showStatus());


var employee1 = new Foo('Yair','Manager');
console.log(employee1.showStatus());
console.log(employee1.names());


