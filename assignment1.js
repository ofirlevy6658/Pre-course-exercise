var readlineSync = require('readline-sync');
var figlet = require('figlet');

let totalScore = 0;

console.log(figlet.textSync('QUIZ TIME!', {
    font: 'big',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));
console.log('******Are You Echo-friendly?******\n\n')



//question   1
console.log('###question 1###');
q1 = ['Somtimes  ', 'Never', 'always   ', 'Only on odd days '];
userChoise = readlineSync.keyInSelect(q1, 'Do you turn off the lights when you go out?');
scoreCalculate(q1,userChoise);


//question   2
console.log('\n###question 2###');
q2 = ['Yes, usually ','No!! I always go to the supermarket with perishable bags    ', 'Yes, but Just eat them', 'Prefer not but Im not strict about it  '];
userChoise = readlineSync.keyInSelect(q2, 'Do you use plastic bags?');
scoreCalculate(q2,userChoise);

//question   3
console.log('\n###question 3###');
q3 = ['0-5 minutes    ','0-5days', '10-20 minutes  ', '5-10 minutes   '];
userChoise = readlineSync.keyInSelect(q3, 'how much time do you stay in the shower?');
scoreCalculate(q3,userChoise);

//question   4
console.log('\n###question 4###');
q4 = ['Yes, everyday','Only when I must to, I prefer bike  ', 'I dont have a license    ', 'Yes, but I have TESLA   '];
userChoise = readlineSync.keyInSelect(q4, 'Do you often use your car?');
scoreCalculate(q4,userChoise);

//question   5
console.log('\n###question 5###');
q5 = ['Tissue  ','With my hands and water    ', 'Hanky   ', 'I eat it   '];
userChoise = readlineSync.keyInSelect(q5, 'When youve got a cold, you blow your nose with a...');
scoreCalculate(q5,userChoise);

//question   6
console.log('\n###question 6###');
q6 = ['Yes, Always   ','I dont have a phone    ', 'Sometimes  ', 'No because I have a lot of smartphones and I need to charge them too'];
userChoise = readlineSync.keyInSelect(q6, 'Do you unplug your phone charger when your phone is charged? ');
scoreCalculate(q6,userChoise);

//question   7
console.log('\n###question 7###');
q7 = ['Im not brushing    ','Yes, Always    ', 'often  ', 'No'];
userChoise = readlineSync.keyInSelect(q7, 'Do you turn off the tap while you brush your teeth?');
scoreCalculate(q7,userChoise);

//question   8
console.log('\n###question 8###');
q8 = ['No,I prefer to drink from a bottle and not use it    ','yes. How else would I drink?','Half with straw and half from the air  ','I dont like straw I always drink in a glass   '];
userChoise = readlineSync.keyInSelect(q8, 'When you dine out, do you use a plastic straw for your drink?');
scoreCalculate(q8,userChoise);

//question   9
console.log('\n###question 9###');
q9 = ['No','Sometimes when I remember  ', 'Sure, and I have Orange bin for plastic, green bin for glass and more bins all the house bin    ', 'Remind me again what recycling is?'];
userChoise = readlineSync.keyInSelect(q9, 'Do you recycle your trash?');
scoreCalculate(q9,userChoise);

//question   10
console.log('\n###question 10###');
q10 = ['No, I like to run it exactly 50% load  ','I dont care I run it when I need my lucky pants', 'I run it once a week since I dont have a lot of clothes   ', 'Only full!!    '];
userChoise = readlineSync.keyInSelect(q10, 'Do you run full loads in your washing machine?');
scoreCalculate(q10,userChoise);


result(totalScore)









// Calculate score by the num of spaces in the end of the word
function scoreCalculate(arr,userChoise){
    if(userChoise === -1){
        throw new Error("exit!");
    }
    else if(arr[userChoise].includes('    ')){
        totalScore +=4;
    }
    else if(arr[userChoise].includes('   ')){
        totalScore +=3;
    }
    else if(arr[userChoise].includes('  ')){
        totalScore +=2;
    }
    else{
        totalScore ++
    }
}

function result(score){
    if(score>35){
        console.log("YOU ARE AN ANGLE, the earth lives thanks to you")
    }
    else if(score>25 && score <= 35){
        console.log("You are good person almost eco friendly")
    }
    else if(score>18 && score <= 25){
        console.log("CONGRATS!! You're an average person")
    }
    else{
        console.log("You are a danger to the human race")
    }

}
