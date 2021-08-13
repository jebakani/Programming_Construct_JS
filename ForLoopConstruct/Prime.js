var prompt = require('prompt-sync')();
var num = prompt('Enter the value of n: ');
let ISPRIME=true;
//check the number is prime or not
for(let i=2;i<=Math.sqrt(num);i++)
{
    //if number is divisible by any other number then it is not from number
    if(num%i==0)
    {
        ISPRIME=false;
        break;
    }
}
//check the ISPRIME value
if(ISPRIME)
{
    console.log(""+num+" is the prime number");
}
else
{
    console.log(""+num+" is not a prime number");
}