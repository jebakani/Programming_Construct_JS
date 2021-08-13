//read input from the user
var prompt=require('prompt-sync')();
var num=prompt('Enter number between 1-7:');
//check of option and disply the number as day of week
switch (num) {
        case '1':
            console.log("Sunday");
            break;
        case '2':
            console.log("Monday");
            break;
        case '3':
            console.log("Tuesday");
            break;
        case '4':
            console.log("Wednesday");
            break;
        case '5':
            console.log("Thursday");
            break;
        case '6':
            console.log("Friday");
            break;
        case '7':
            console.log("Saturday");
            break;
        default:
            console.log("ENTER VALID NUMBER")
            break;
}