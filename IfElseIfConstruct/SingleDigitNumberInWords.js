//read input from the user
const prompt = require('prompt-sync')();
var num=prompt('Enter single digit number:');
//check of option and disply the number as words
if(num==0)
{
    console.log("ZERO");
}
else if(num==1)
{
    console.log("ONE");
}
else if(num==2)
{
    console.log("TWO");
} 
else if(num==3)
{
    console.log("THREE");
} 
else if(num==4)
{
    console.log("FOUR");
}
 else if(num==5)
{
    console.log("FIVE");
}
 else if(num==6)
{
    console.log("SIX");
}
 else if(num==7)
{
    console.log("SEVEN");
}
else if(num==8)
{
    console.log("EIGHT");
}
else if(num==9)
{
    console.log("NINE");
}
else
{
    console.log("ENTER VALID NUMBER")
}