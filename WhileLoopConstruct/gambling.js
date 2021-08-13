const MAX_MONEY=200;
const BROKE=0;
const WIN=1;
let money=100;
let numOfBet=0;
let wonTime=0;
while(money!=0 && money !=200)
{
    let bet=Math.floor(Math.random()*10)%2;
    if(bet==WIN)
    {
        wonTime+=1;
        money+=2;
    }
    else
    {
        money-=2;
    }
    numOfBet+=1
}
console.log("number of bet:"+numOfBet);
console.log("number of time won:"+wonTime);
console.log("money after game:"+money);