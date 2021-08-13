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
