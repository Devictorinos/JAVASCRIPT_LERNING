var arr = ["mitsubishi", "mazda", "opel", "citroen","mesedess", "BMW"];

var arr2 = arr.reverse();

console.log(arr2);

function dostringFromArray (ar) {
    
    var str = '';
    for (var i = 0; i < ar.length; i++) {
        str += ar[i] + ",";
    };

    console.log(str);
}

dostringFromArray(arr);

