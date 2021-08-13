const prompt = require('prompt-sync')();
var num=prompt('Enter number between 1-7:');
//check of option and disply the number as day of week
if(num==1)
{
    console.log("Sunday");
}
else if(num==2)
{
    console.log("Monday");
} 
else if(num==3)
{
    console.log("Tuesday");
} 
else if(num==4)
{
    console.log("Wednesday");
}
 else if(num==5)
{
    console.log("Thursday");
}
 else if(num==6)
{
    console.log("Friday");
}
 else if(num==7)
{
    console.log("Saturday");
}
else
{
    console.log("ENTER VALID NUMBER")
}