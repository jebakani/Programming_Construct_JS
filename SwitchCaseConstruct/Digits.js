//read input from the user
const prompt=require('prompt-sync')();
var num=prompt('Enter number between digit(1,10,100,....):');
//check of option and display the digit value
    switch (num) {
        case '1':
            console.log("Once");
            break;
        case '10':
            console.log("Tens");
            break;
        case '100':
            console.log("Hundreds");
            break;
        case '1000':
            console.log("Thousand");
            break;
        case '10000':
            console.log("Ten Thousand");
            break;
        case '100000':
            console.log("Lakhs");
            break;
        default:
            console.log("ENTER VALID NUMBER")
            break;
    }