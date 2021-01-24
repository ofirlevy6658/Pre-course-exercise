var readlineSync = require('readline-sync');
var figlet = require('figlet');

let sumPlayer1 = 50,sumPlayer2 = 50;
let userName, userName2;
let numOfPlayer = true; //true means 1 player false 2 players


console.log(figlet.textSync('WELCOME', {
    font: 'big',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));
let numPlayers = readlineSync.question('Please enter number of players (1 or 2) ')
if(numPlayers == 2){
    console.log('You have selected 2 player version');
    userName = readlineSync.question('Player one enter your name ');
    userName2 = readlineSync.question('Player two enter your name ');
    numOfPlayer = false; // false means two players
    
}
else if(numPlayers == 1){
    console.log('You have selected 1 player version');
    userName = readlineSync.question('Please enter your name. ');
}
else{
    console.log('Wrong key bye')
    process.exit(); // finish the program
}

console.log(figlet.textSync('LET THE WAR BEGIN', {
    font: 'ANSI Regular',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 100,
    whitespaceBreak: true
}));

// one player
while(numOfPlayer){
    console.log(userName+' You currently have '+ sumPlayer1 +'$');
    let userBet = readlineSync.questionInt('Place your bet for the next Round 1$ to '+sumPlayer1+'$ ');

    if(userBet>sumPlayer1){
        console.log('Invalid bet BYE');
        process.exit(); // finish the program
    }
    randomCard = Math.floor(Math.random()*12)+1;
    randomCardPc = Math.floor(Math.random()*12)+1;  
    console.log('Your card is ' + randomCard +randomSuit() + ' and mine is ' + randomCardPc + randomSuit());
    if(randomCard>randomCardPc){
        sumPlayer1 += userBet;
        console.log('You won!! now you have ' + sumPlayer1 + '$\n');
    }
    else if(randomCard<randomCardPc){
        sumPlayer1 -= userBet;
        console.log('You lose!! now you have ' + sumPlayer1 + '$\n');
        if(sumPlayer1 === 0){
            console.log('You are broke chao');
            process.exit(); // finish the program
        }
    }
    else{
        console.log('Tie!!! your money is still ' + sumPlayer1 +'\n');
    }
    let userChoise = readlineSync.questionInt('What would you like to do?\n1. Play another round \n2. leave with my money :-) ');
    if(userChoise === 1){
        console.log('That’s the spirit!!\n');
    }
    else if(userChoise === 2){
        console.log('I hope we will meet again, enjoy with the money. (' +sumPlayer1+'$) ');
        process.exit();
    }
    else{
        console.log('Invalid key bye');
        process.exit(); // finish the program
    }
}

// 2 players version
while(!numOfPlayer){
    console.log(userName+' You currently have '+ sumPlayer1 +'$');
    console.log(userName2+' You currently have '+ sumPlayer2 +'$');
    let betAmount = betSystemTwoPlayers(sumPlayer1,sumPlayer2);

    randomCardPlayerOne = Math.floor(Math.random()*12)+1;
    randomCardPlayerTwo = Math.floor(Math.random()*12)+1;  
    console.log(userName +' card is ' + randomCardPlayerOne + randomSuit() +' '+ userName2 + ' card is ' + randomCardPlayerTwo + randomSuit());

    if(randomCardPlayerOne>randomCardPlayerTwo){
        sumPlayer1 += betAmount;
        sumPlayer2 -=betAmount;
        console.log(userName+' Won the round\n');
        moneySummary(sumPlayer1,sumPlayer2);
    }
    else if(randomCardPlayerOne<randomCardPlayerTwo){
        sumPlayer1 -= betAmount;
        sumPlayer2 += betAmount;
        console.log(userName2+' Won the round\n');
        moneySummary(sumPlayer1,sumPlayer2);
    }

    else{
        console.log('Tie Your money is remain the same player one - ' + sumPlayer1 +'$ player two - '+sumPlayer2+'\n');
    }
    let userChoise = readlineSync.questionInt('What would you like to do?\n1. Play another round \n2. leave with my money :-) ');
    if(userChoise === 1){
        console.log('That’s the spirit!!\n');
    }
    else if(userChoise === 2){
        console.log('I hope we will meet again, enjoy with the money. \n' + userName +' - ' +sumPlayer1+'$\n'+ userName2+ ' - '+sumPlayer2+'$');
        process.exit();
    }
    else{
        console.log('Invalid key bye');
        process.exit(); // finish the program
    }
}



function randomSuit(){
    random = Math.floor(Math.random()*4)
    if(random === 0 ){
        return '♦';
    }
    else if(random === 1 ){
        return '♥';
    }
    else if(random === 2 ){
        return '♣';
    }
    else{
        return '♠';
    }
}

function betSystemTwoPlayers(sum1,sum2){
    if(sum1>sum2){
        console.log('Since '+ userName+' have more money, '+ userName2+' need to decide the bet amount')
        let userBet = readlineSync.questionInt(userName2+' place your bet for the next Round 1$ to '+sum2+'$ ');
        return userBet;
    }
    else if(sum1<sum2){
        console.log('Since '+ userName2+' have more money, '+ userName+' need to decide the bet amount')
        let userBet = readlineSync.questionInt(userName+' place your bet for the next Round 1$ to '+sum1+'$ ');
        return userBet;
    }
    else{
        console.log('You have the same amount of money hence you both have to offer bet amount and the averege will take')
        let userBet = readlineSync.questionInt(userName + ' place your bet for the next Round 1$ to '+sum1+'$ ');
        let userBet2 = readlineSync.questionInt(userName2 + ' place your bet for the next Round 1$ to '+sum2+'$ ');
        let avgBet = Math.floor((userBet+userBet2)/2);
        if(avgBet>sum1 || avgBet>sum2){
            console.log('Invalid bet BYE');
            process.exit(); // finish the program
        }
        console.log('the bet is '+avgBet+'$');
        return avgBet;
    }
    
}

function moneySummary(playerOne,playerTwo){
    if(playerOne == 0){
        console.log(userName + ' is broke, '+ userName2 + ' won the game!! and go home with '+playerTwo+'$ ');
        process.exit(); // finish the program
    }
    else if(playerTwo == 0){
        console.log(userName2 + ' is broke, ' + userName + ' won the game!! and go home with '+playerOne+'$ ');
        process.exit(); // finish the program
    }
    else{
        console.log('after this round '+ userName +' have '+playerOne+'$ and '+ userName2 +' have '+playerTwo+'$')
    }
}
