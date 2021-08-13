//reding input from the user
const prompt = require('prompt-sync')();
console.log("enter month (1-12):");
var month = prompt();
console.log("Enter date:");
var date = prompt();
//getting and setting the date 
const fromDate = new Date();
fromDate.setDate(20);
fromDate.setMonth(2);
const toDate = new Date();
toDate.setDate(20);
toDate.setMonth(5);
///create the date object and set the date and month from the user
var d = new Date();
d.setDate(date);
d.setMonth(month);
//check the value between the given date range using get time method
if (d.getTime() >= fromDate.getTime() && d.getTime() <= toDate.getTime()) {
    console.log("true");
}
else {
    console.log("False")
}