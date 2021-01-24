let readlineSync = require('readline-sync');

let sentence = readlineSync.question('please enter a sentence ');

let fixSentence = sentence.split(' ');
console.log(fixSentence.join('*'));