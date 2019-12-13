//Initializing Arrays
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

//Mutate Array Data
names[1] = 'Ben';
names[names.length] = "Mark";

//Different Data Types
var john  = ['John', 'Smith', 1990, 'designer', true];
john.push('blue'); //Add to the end of the array
john.unshift('Mr.'); //Add to the beginning of the array
john.pop(); //Removes last value in the array
john.shift(); //Removes first value in the array

console.log(john);
console.log(john.indexOf(1990)); //Find the postion of the value in the array

var isDesigner =  john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);