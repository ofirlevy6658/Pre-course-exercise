var readlineSync = require('readline-sync');

//questionInt parseInt so if the user enter numbers and then string the parseInt will ignore the string after the numbers

let userNum = -1;

while(userNum<0){
    userNum = readlineSync.questionInt('enter a positive number. ');
    if(userNum<0){
        console.log('only positive numbers allow (0 inclues)')
    }
}
let fac = 1;

for(let i = 2;i<=userNum;i++){
    fac = fac*i
}
console.log('the factorial of '+ userNum + ' is '+ fac);