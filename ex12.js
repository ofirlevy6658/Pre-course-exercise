let readlineSync = require('readline-sync');

let str = readlineSync.question('enter a string ');

let vowel = ['a','e','i','o','u','y'];
let capitalizeString = '';

for(let i=0;i<str.length;i++){
    if(vowel.includes(str[i])){
        capitalizeString = capitalizeString+str[i].toUpperCase()
    }
    else{
        capitalizeString = capitalizeString+str[i];
    }
}
console.log(capitalizeString);