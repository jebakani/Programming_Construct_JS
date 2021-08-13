//function to check number is prime or not
function IsPrime(num)
{
    for(let j=2;j<=Math.sqrt(num);j++)
    {
        if(num%j==0)
        {
            return false;
        }
    }
    return true;
}
//funtion to print the result
function CheckPrimeResult(res,num)
{
    if(res)
    {
        console.log(""+num+" is prime");
    }
    else
    {
        console.log(""+num+" is not prime");
    }
}
//get inpu from the user
var prompt = require('prompt-sync')();
var num = prompt('Enter the value of n: ');
var res=IsPrime(num);
CheckPrimeResult(res,num);
