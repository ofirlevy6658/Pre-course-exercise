let readlineSync = require('readline-sync');

let n = readlineSync.questionInt('enter a number ');

if(n>1){ // the first prime number is 2 so if the user enter below its print nothing.
process.stdout.write(''+2)
    for(let i=2;i<=n;i++){
        for(let j=2;j<Math.sqrt(i)+1;j++){
            if(i%j === 0){
                break;
                
            }
            else if(j >= Math.sqrt(i)){
                process.stdout.write(','+i)
            }
            
        } 
    }
}