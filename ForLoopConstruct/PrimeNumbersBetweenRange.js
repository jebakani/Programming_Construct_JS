var prompt = require('prompt-sync')();
var start = prompt('Enter the value of start: ');
var end = prompt('Enter the value of end: ');
//converting  string to int
start=parseInt(start);
end=parseInt(end);
let ISPRIME;
for (let i = start; i < end; i++) {
    ISPRIME=true;
    //check the number is prime or not
    for (let j = 2; j <= Math.sqrt(i); j++) {
        //if number is divisible by any other number then it is not from number
        if (i % j == 0) {
            ISPRIME = false;
            break;
        }
    }
    //check the ISPRIME value
    if (ISPRIME) {
        console.log("" + i + " is the prime number");
    }
}