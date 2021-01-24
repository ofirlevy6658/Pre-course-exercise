var readlineSync = require('readline-sync');

var userName = readlineSync.question('Please enter your name. ');
console.log('Hello ' + userName + '!');
