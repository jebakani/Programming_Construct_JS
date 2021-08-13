var prompt = require('prompt-sync')();
var num = prompt('Enter the value of n: ');
//if n value greater than 256 then stop the value
if (num > 256) {
    console.log("Number should be less than 256");
}
//else print the tables 
else {
    for (let i = 0; i <= num; i++) {
        console.log("2 ^ " + i + " = " + Math.pow(2, i));
    }
}