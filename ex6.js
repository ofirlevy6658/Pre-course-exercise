var readlineSync = require('readline-sync');


//we using parseInt so if the user enter numbers and then string the parseInt will ignore the string after the numbers

let userNum = 0;
while(userNum<=10){
    userNum = readlineSync.questionInt('please choose a number larger than 10 ',{limitMessage:'Only numbers allow'});
}
console.log('thank you')