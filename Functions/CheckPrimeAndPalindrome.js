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
function IsPalindrome(num)
{
  let res=0;
  let temp=num;
  while(temp!=0)
  {
      res=(res*10)+(temp%10);
      temp=Math.floor(temp/10);
  }
  if(num==res)
  {
      return true;
  }
  else
  {
      return false;
  }
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
let res=IsPrime(num);
CheckPrimeResult(res,num);
res=IsPalindrome(num);
if(res)
{
    console.log("number is palindrome");
}
else
{
    console.log("number is not palindrome");
}
