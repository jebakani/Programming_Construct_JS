const prompt=require('prompt-sync')();
let min=0
let max=0;
let num1=prompt('enter a number:');
let num2=prompt('enter second number:');
let num3=prompt('enter third number:');
//calculate the four equation
let equ1=num1+num2*num3;
let equ2=num1%num2+num3;
let equ3=num3+num1/num2;
let equ4=num1*num2/num3;
//Maximum amoung 4 euqation:
if(equ1>equ2&&equ1>equ3&&equ1>equ4)
 {
    console.log("maximum is "+equ1);
 }
 else if(equ2>equ1&&equ2>equ3&&equ3>equ4)
 {
    console.log("maximum is "+equ2);
 }
 else if(equ3>equ2&&equ3>equ1&&equ3>equ4)
 {
    console.log("maximum is "+equ3);
 }
 else
 {
    console.log("maximum is "+equ4);
 }

 //minimum amoung 4 equation
 if(equ1<equ2&&equ1<equ3&&equ1<equ4)
 {
    console.log("minimum is "+equ1);
 }
 else if(equ2<equ1&&equ2<equ3&&equ3<equ4)
 {
    console.log("minimum is "+equ2);
 }
 else if(equ3<equ2&&equ3<equ1&&equ3<equ4)
 {
    console.log("minimum is "+equ3);
 }
 else
 {
    console.log("minimum is "+equ4);
 }