const prompt=require('prompt-sync')();
//get the values from the user
let value=prompt('Enter value to be converted:');
//enter choice to decide the type of convertion
console.log("1.Feet->inches\n2.inches->feet\n3.feet->meter\n4.meter->feet");
let choice=prompt('Enter your choice:');
switch(choice)
{
    case '1':
        var res = value * 12;
        console.log("" + value + "feet =" + res + " inches");
        break;
    case '2':
        var res = value / 12;
        console.log("" + value + "inches =" + res + " feet");
        break;
    case '3':
        var res = value / 3.2808412;
        console.log("" + value + "feet =" + res + " meter");
        break;
    case '4':
        var res = value * 3.28084;
        console.log("" + value + "meter =" + res + " feet");
        break;
    default:
        console.log("enter valid option");
        break;
}