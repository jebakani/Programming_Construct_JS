 //read input from the user
 const prompt = require('prompt-sync')();
 var num=prompt('Enter the number:');
 num=parseInt(num);
 let fact=1;
 //finding the factorial of the number
 for(let i=1;i<=num;i++)
 {
     fact*=i;
     
 }
 console.log("The factorial of "+num+ " is :"+fact);