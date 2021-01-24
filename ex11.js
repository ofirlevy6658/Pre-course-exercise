let readlineSync = require('readline-sync');

let str = readlineSync.question('enter a string ');
let middle = str.length/2;

for(let i=0;i<middle;i++){
    if(str[i] !== str[str.length-i-1]){
        console.log("not palindrome");
        process.exit()
        }
    }
console.log('palindrome');

