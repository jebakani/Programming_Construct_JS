//initialize the variables
const HEAD=1;
var headCount=0;
var tries=0
//loop until the head count reaches 11
while(headCount<=11)
{
    let coinFlip=Math.floor(Math.random()*10)%2;
    if(HEAD==coinFlip)
    {
        headCount+=1;
    }
    tries+=1;
}
console.log("After "+tries+" tries 11 head is achieved");