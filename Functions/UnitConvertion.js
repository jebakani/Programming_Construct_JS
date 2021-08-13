//function to convert faheren to celcius
function FahrenToCelsius(value)
{
   let res= (value-32) *(5/9);
   return res;
}
//function to convert celsius to faheren
function CelsiusToFaheren(value)
{
   let res=  (value*(9/5))+32
   return res;
}
var prompt = require('prompt-sync')();
let choice= prompt('1.deg f to degc 2.degc to deg f');
let value=prompt('enter the value:');
switch(choice)
{    
    case '1':
        if(value>=32 && value<=212)
        {
        console.log("In celsius:"+FahrenToCelsius(value));
        }
        else
        {
            console.log("value is invalid");
        }
        break;
    case '2':
        if(value>=0 && value<=100)
        {
        console.log("In faheren: "+CelsiusToFaheren(value));
        }
        else
        {
            console.log("invalid input");
        }
        break;
    default:
        console.log("enter valid option");
        break; 
}