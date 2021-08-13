const prompt = require('prompt-sync')();
//read input from the user
var num = prompt('Enter number between digit(1,10,100,....):');
//check of option and display the digit value
if (num == 1) {
    console.log("Once");
}
else if (num == 10) {
    console.log("Tens");
}
else if (num == 100) {
    console.log("Hundreds");
}
else if (num == 1000) {
    console.log("Thousand");
}
else if (num == 10000) {
    console.log("Ten Thousand");
}
else if (num == 1000000) {
    console.log("Lakhs");
}
else {
    console.log("ENTER VALID NUMBER")
}