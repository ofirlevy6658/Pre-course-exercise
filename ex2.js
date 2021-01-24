var readlineSync = require('readline-sync');

let userNum = readlineSync.questionInt('Please enter number ');
let userNum2 = readlineSync.questionInt('Please enter another number ');
calculate(userNum,userNum2);


function calculate(a,b){
    if(a+b === 10){
        console.log('makes 10')
    }
    else{
        console.log('nope')
    }
}

