function getEvenNumbers(numbersArray) {
    
        return numbersArray.filter(function (num) {
          
                return (num % 2 === 0);
            
        });
  
}

console.log(getEvenNumbers([2,4,5,6]));


/* ==============  */

function add(n){
    return function (n2) {
        return n + n2;
    }
}

/* =====  */
