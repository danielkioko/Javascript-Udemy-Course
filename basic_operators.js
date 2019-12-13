var year, yearJohn, yearMark;

var johnAge = 20;
var markAge = 30;
var now = 2019;

//MATH OPERATORS
yearJohn = now - johnAge;
yearMark = now - markAge;

console.log(yearJohn);
console.log(yearMark);

//Get the type of operator
console.log(typeof yearJohn);
console.log(typeof yearMark);

//Compare values
var isJohnOlder = johnAge > markAge;
console.log(isJohnOlder);

//Average Age
var averageAge, x;
x = averageAge = (johnAge + markAge) / 2;
console.log(x);