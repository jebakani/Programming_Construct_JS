//get input from user
const prompt = require('prompt-sync')();
var year = prompt('Enter the year:');
//check leap year or not 
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log("" + year + " is the leap year");
}
else {
    console.log("" + year + " is not a leap year");
}