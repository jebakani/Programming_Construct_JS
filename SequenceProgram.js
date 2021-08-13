console.log("Executing Sequence problems");
//P1-Displaying the Single digit using random function
let singleDigit=Math.floor(Math.random()*10);
console.log("P1-Single digit:"+singleDigit);

//P2-Using random getting the Dice number between 1-6
let dice=Math.floor(Math.random()*6)+1;
console.log("P2-Display the Dice number:"+dice);

//P3-Generate 2 random number and sum them
let dice1=Math.floor(Math.random()*6)+1;
let dice2=Math.floor(Math.random()*6)+1;
let sum= dice1+dice2;
console.log("P3-Dice number 1 :"+dice1+"\nDice number 2:"+dice2+"\nSum of two dice:"+sum);

sum=0;
//P4-Generating 5 random 2 digit number . find sum and average
for(let i=0;i<5;i++)
{
    let num=Math.floor(Math.random()*100)+10;
    console.log(num);
    sum+=num;
}
console.log("Sum of five two digit number:"+sum);
console.log("Average of 5 two digit num:"+sum/5);

//P5-A-Unit conversion inch to feet
const INCH=12;
let var1=42;
console.log(""+var1+" inch="+42/INCH+" Feet");

//P5-B Finding area of field
const LENGTH=40;
const BREADTH=60;
let plotArea=LENGTH*BREADTH;
console.log("total area of 25 plot :"+plotArea*25);