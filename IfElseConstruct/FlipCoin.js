//P4-Coin flip
const HEAD=1;
let coinFlip=Math.floor(Math.random()*10)%2;
if(coinFlip==HEAD)
{
    console.log("Head");
}
else
{
    console.log("Tail");
}