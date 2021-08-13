var prompt = require('prompt-sync')();
var num = prompt('Enter the value of n: ');
console.log("Prime factor of "+num+" are:");
//check the number is prime or not
for(let i=1;i<=num;i++)
{
    //if number is divisible by number then print
    if(num%i==0)
    {
        console.log(i);
        
    }
}
