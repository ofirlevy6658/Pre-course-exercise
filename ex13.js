let readlineSync = require('readline-sync');

let str = readlineSync.question('enter a string ');

let cleanString = str.replace(/[^A-Za-z ]+/g, ''); // delete the symbols and numbers from the string
let arrWords = cleanString.split(' ')

let longestWord = arrWords.reduce((r, e) => r.length < e.length ? e : r); //find the longest word in the array
console.log(longestWord);