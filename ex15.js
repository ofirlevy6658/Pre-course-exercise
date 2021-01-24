let readlineSync = require('readline-sync');

let arrLen = readlineSync.question('Please enter a number (bigger than one).  ');

if(!/^\d+$/.test(arrLen) || arrLen<2){//check the user input ( only digits allow) and positive number bigger than 1)
    console.log('Invalid input');
    process.exit() // exit the program
} 
let arr = []; 
let min = 50;
let max = 1;

for(let i=0;i<arrLen;i++){
    let num = Math.floor(Math.random()*50)+1
    arr.push(num);
    if(min>num){
        min = num;
    }
    if(max<num){
        max = num;
    }
}
console.log('min is ' +min);
console.log('max is '+max)