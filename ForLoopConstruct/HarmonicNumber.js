var prompt = require('prompt-sync')();
var num = prompt('Enter the value of n: ');
let harmonic=0;
for(let i=1;i<=num;i++)
{
    harmonic+=(1/i);
    console.log(""+i+" th harmonic number= "+harmonic);
}