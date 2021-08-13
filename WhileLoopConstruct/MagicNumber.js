var prompt = require('prompt-sync')();
console.log("guess number between 1-100");
let start=1;
let end=100;
let mid=start+end/2;
while(start != end)
{
    console.log("2 if num less than or equal "+mid+" else press 1")
    var choice=prompt()
    choice=parseInt(choice);
    switch (choice)
            {
                case 1:
                    start = mid + 1;
                    break;
                case 2:
                    end = mid;
                    break;
                default:
                    console.log("enter valid option");
                    break;
            }
    mid = Math.floor((start + end) / 2);

}
if(start==end)
{
    console.log("the number you guess:"+start);
}