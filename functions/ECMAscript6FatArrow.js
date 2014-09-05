var sum = [1,2,3,4,5,6,7];

// ecma script fat arrow allows for the of omission implied requirements such as the return statement
sum.reduce( (last, current) => las + current );


//with current version of ECMAscript
var z = sum.reduceRight( function (prev, current) {
                    return prev + current;
                });

console.log(z);