
var car = {};

Object.defineProperty(car, 'doors', {
    configurable: true,
    writable: true,
    enumerable: true,
    value: 4
});

Object.defineProperty(car, 'wheels', {
    configurable: true,
    writable: true,
    enumerable: true,
    value: 4
});


Object.defineProperty(car, 'secretTrackingDeviceEnabled', {
    enumerable: false,
    value: true
});


console.log(Object.keys(car));
console.log(Object.getOwnPropertyNames(car));
console.log(car.propertyIsEnumerable('secretTrackingDeviceEnabled'));
console.log(Object.getOwnPropertyDescriptor(car, 'wheels'));
console.log(Object.getOwnPropertyDescriptor(car, 'doors'));
console.log(Object.getOwnPropertyDescriptor(car, 'secretTrackingDeviceEnabled'));


/* ---------------------------------------------- */
  /* -------Object.getOwnPropertyNames ------- */

var box = Object.create({}, {
    openLid: {
        value: function() {
            return "nothing";
        },
        enumerable: true
    },

    openSecretCompartment: {
        value: function() {
            return "treasure";
        },
        enumerable: false
    }
});

console.log(box);//will output only openLid property
console.log(Object.getOwnPropertyNames(box).sort());//will output both of propertys

/* ---------------------------------------------- */
    /* -------Object.getPrototypeOf------- */

var a  = {};

console.log(Object.getPrototypeOf(car) === Object.prototype && Object.prototype === a.__proto__);

/* ---------------------------------------------- */
   /* -------Object.hasOwnProperty------- */

var foo = {
    foo: 'foo'
};

var bar = Object.create(foo, {
   bar: { enumerable: true,
          value: 'bar'
   }
});



for (var x in bar) {
    console.log(x);
}
console.log("----");
var myPropsBar = Object.getOwnPropertyNames(bar).map( function(i) {
    return bar.hasOwnProperty(i) ? i : undefined;
});


console.log(myPropsBar);

/* ---------------------------------------------- */
      /* ------- Object.isFrozen ------- */

var bombPop = {
    wrapping: 'plastic',
    flavors: ['Cherry', 'Lime', 'Blue Rasberry']
}

console.log(Object.isFrozen(bombPop));

delete bombPop.wrapping;

console.log(bombPop.wrapping);

Object.freeze(bombPop);

delete bombPop.flavors;
console.log(bombPop.flavors);
console.log("-- is frozen --");
console.log(Object.isFrozen(bombPop));


/* ---------------------------------------------- */
   /* ------- Object.prototype.isPrototypeOf ------- */
console.log('prototype of---');

function Rectangle() {
}

var rec = new Rectangle();

console.log(Rectangle.prototype.isPrototypeOf(rec));

var aaa =  {};

var bbb =  Object.create(aaa);

console.log(aaa.isPrototypeOf(bbb));


/* ---------------------------------------------- */
    /* ------- Object.isExtensible ------- */
var cars = {

    doors: 4
};

console.log("extensible ---");

console.log(Object.isExtensible(cars) === true);

Object.preventExtensions(cars);

console.log(Object.isExtensible(cars)  === true);

cars.wheels = 4;// not be added to the object
console.log(cars);


/* ---------------------------------------------- */
     /* ------- Object.isSealed ------- */

console.log("Object.isSealed --- ");

var ziplockBag = {};

console.log(Object.isSealed(ziplockBag) === true);
console.log(Object.isExtensible(ziplockBag));

Object.seal(ziplockBag);

ziplockBag.bag = "guchi";
console.log(ziplockBag);
console.log(Object.isSealed(ziplockBag) === true);


console.log(Object.isExtensible(ziplockBag));


/* ---------------------------------------------- */
      /* ------- Object.valueOf  ------- */
console.log("valueOf ---");
var pop = function(name) {
    this.name = name;
}

var tesla = Object.create(pop.prototype, {

    name: {
        value: 'tesla'
    }
});

console.log(tesla.valueOf());

pop.prototype.valueOf = function() {// adding valueOf function to the prototype of pop.
    return this.name;
}

console.log(tesla.valueOf());
console.log(pop.prototype);


/* ---------------------------------------------- */
     /* ------- Object.is  ------- */
console.log("Object.is ---");
console.log(Object.is('true', 'true'));
console.log(Object.is('True', 'true'));

console.log(NaN === 0/0);
console.log(Object.is(NaN, 0/0));


/* ---------------------------------------------- */
   /* ------- Object.defineProperties  ------- */

console.log("Object.defineProperties ---");

var shirt = {};

Object.defineProperties(shirt, {

    'color' : {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 'red'
    },

    'size': {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 'XL'
    }
});

console.log(shirt.color);
console.log(shirt.size);


/* ---------------------------------------------- */
      /* ------- Object.prototype  ------- */

console.log("Object.prototype ---");


var Dog = function(){};

Dog.prototype.speak = function() {
  return "woof";
};

var Cat = function(){};

Cat.prototype.speak = function(){
    return "meow";
};

var Tom = function(){};

Tom.prototype = new Cat();

var Bovy = new Tom();

console.log("bovy - " + Bovy.speak());

console.log("bovy prototype chain is empty - " + Bovy.prototype);
console.log(Tom.prototype);

// Setting the prototype of an object instance will not affect the instantiated properties


Bovy.prototype = new Dog();

console.log(Bovy.prototype);
console.log(Bovy.speak());
