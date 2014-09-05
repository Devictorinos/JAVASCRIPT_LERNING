function foo(funct, arg) {

    funct(arg);
}


function foo2 (arg) {
    console.log(arg);
}

foo(foo2, "3");