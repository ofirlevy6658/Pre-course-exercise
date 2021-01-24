var readlineSync = require('readline-sync');

var diners = readlineSync.questionInt('How many people are you going with? ');
var kosher = readlineSync.question('Should it be Kosher? ');

if(kosher !== 'y' && kosher !== 'n'){
    throw "stop execution";
}
if(kosher === 'y'){
    var lemehadrin = readlineSync.question('should it be Kashrut Lemehadrin? ');
    if(lemehadrin !== 'y' && lemehadrin !== 'n'){
        throw "stop execution";
    }
}

food = ['Italian', 'Japan', 'Greek', 'Fast food','Steakhouses'];
userChoise = readlineSync.keyInSelect(food, '. What kind of food do you want?');

switch(userChoise){
    case 0:
        if(kosher === 'y' && lemehadrin ==='y'){
            console.log('RabItalino');
        }
        else if(lemehadrin ==='n'){
            console.log('Pizza Fino'); 
        }
        else{
            console.log('Cicchetti');
        }
        break;
    case 1:
        if(kosher === 'y' && lemehadrin ==='y'){
            console.log('Nini Hachi');
        }
        else if(lemehadrin ==='n'){
            console.log('Kanki Sushi');
        }
        else{
            console.log('Minna Tomei');
        }
        break;
    case 2:
        if(kosher === 'y' && lemehadrin ==='y'){
            console.log('Ouzeria');
        }
        else if(lemehadrin ==='n'){
            console.log('Kalamata');
        }
        else{
            console.log('Shabtai Hayafe');
        }
        break;
    case 3:
        if(kosher === 'y' && lemehadrin ==='y'){
            console.log('SABICH TSERNIKOVSKI');
        }
        else if(lemehadrin ==='n'){
            console.log('Falafel Hakosem');  
        }
        else{
            console.log('Yashka Shwarma');
        }
        break;
    case 4:
        if(kosher === 'y' && lemehadrin ==='y'){
            console.log('NG');
        }
        else if(lemehadrin ==='n'){
            console.log(' A Place For Meat');
        }
        else{
            console.log('Hudson Restaurant');
        }
}