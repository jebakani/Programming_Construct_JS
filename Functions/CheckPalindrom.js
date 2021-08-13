//function to check two number is palindrome
function CheckPalindrome(a,b)
{
   let res=0;
   while(a!=0)
   {
       let rem=a%10;
       res=(res*10)+rem;
       a=Math.floor(a/10);
   }
   if(res==b)
   {
       return true;
   }
   else
   {
       return false;
   }
}
//get input fro user
var prompt = require('prompt-sync')();
console.log("enter two numbers");
var num1=prompt();
var num2=prompt();
//check the result
if(CheckPalindrome(num1,num2))
{
    console.log(""+num1+ " is palindrome of "+num2);
}
else
{
    console.log("two number ar different");
}