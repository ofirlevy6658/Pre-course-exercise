let readlineSync = require('readline-sync');
let figlet = require('figlet');


/*
    description about the program - in this program the user have to guess coded word by selecting chars, everytime the user guess char that apear in the coded word
    the user can see where the the char located in the word.
    ther user have 10 tries to guess char in the word and 1 time to guess the enitre word if didnt succeeded after 10 tries of chars. 

    implement - for selecting the word we have array with random words we pick one word from the array with Math.random.
    to built the coded word we create new word in the same length of the orginal with and fill it with '*' by using repeat function.
    the program run in while loop, we ask the user to enter his guess and and send it to isChar function to check if the input is valid.
    if the input is valid we send it to findIndexes function, the fucntion return array with all the indexes that the char exist in the word.
    if the array length is 0 we know that the input is not contain in the orginal.
    if the array length is 1 or more we change the coded word by using replaceIndex function.
*/


console.log(figlet.textSync('HANG MAN', {
    font: 'big',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));



wordList = ['concept','mouse','shark','owe','feign','calendar','skate','penetrate','language','mourning','nomination','digital','hold','mild','order','incapable','demonstrate','appeal','implication','service']; //array to choose random word
word = wordList[Math.floor(Math.random() * 20)]; // Select random word from the array


flag = false;
remainingGuesses = 10;

wordToGuess = '*'.repeat(word.length); // Creates an encoded word
while(!flag){
    
    console.log('You have ' + remainingGuesses + ' guesses'+'\nthe word is:'+ '\n' + wordToGuess+ '\n');
    let userGuess = readlineSync.question('What is your guess? ');
    userGuess = userGuess.toLowerCase(); // this game not case sensetive

    if(remainingGuesses === 1){ // check if the user used all the tries 
        break; 
    }  
    if(isChar(userGuess)){ // valid input
        let indexes = findIndexes(word,userGuess); 
        if(indexes.length === 0){ //if the length array equals to 0 that means the word not contain the user guess. 
            console.log('Sorry, '+userGuess+' does not appear try again \n\n');
            remainingGuesses--;
        } 
        else{
            indexes.forEach(index => wordToGuess = replaceIndex(wordToGuess,index,userGuess));
            if(!wordToGuess.includes('*')){
                flag = true; // the user found the word
            }
        }

    }
    else{ // invalid input (not a char)
        console.log('The input is invalid, please try again. \n\n');
    }
}
if(flag){
    console.log('\nWow You are good!!!')
}
//last chance to guess the entire word
else{
    console.log("\nYou've run out of guesses, but now you have chance to guess the entire word - " + wordToGuess);
    let lastGuess = readlineSync.question('What is your guess? (Enter the entire word) ');
    if(lastGuess === word){
        console.log('\nWOW YOU ARE AMAZING!!');
    }
    else{
        console.log('\nIm sorry no more attempts better luck next time (: ');
    }
}


//Boolean function that check if the input is valid
function isChar(ch){ 

    if(ch>='a' && ch<='z' && ch.length === 1){
        return true;
    }
    else{
        return false;
    }
}

// function that check if the user guess exist in the word and return array with the right index
function findIndexes(word,ch){ 
    let indexes = [];
    for(let i=0; i<word.length;i++) {
        if (word[i] === ch){ 
            indexes.push(i);
        }
    }
    return indexes;
}

// this function get string, index and char replace the current char of the string to new char
function replaceIndex(str,index,char){
    str2 =  str.substring(0,index) + char + str.substring(index+1);
    return str2;
}



