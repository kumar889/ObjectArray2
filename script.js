

fizzBuzz(15);

function fizzBuzz(number) {
    for (var i = 0; i <=number; i++){

        if (i % 3 === 0){
         console.log(i,"fizz");
    }

        if (i % 5 === 0){
         console.log(i,"buzz");
    }
    
    if (((i % 3)=== 0)  &&  ((i % 5)=== 0)){
        console.log(i,"fizzbuzz");
    }
    
    }
}