// var john  = {
//     name: "John",
//     dob: 1997,
//     occupation: "Surfer"
// };

// var Person = function(name, dob, occupation) {
//     this.name = name;
//     this.dob = dob;
//     this.occupation = occupation;
// }

// Person.prototype.calculateAge = function() {
//     console.log(2019 - this.dob);
// }

// var peter = new Person("Peter", 1997, "Skater");
// peter.lastName = "Piers";
// console.log(peter);
// peter.calculateAge();

// var penny = new Person("Penny", 1993, "Skater");
// penny.lastName = "Nancy";
// console.log(penny);
// penny.calculateAge();

// var paul = new Person("Paul", 1990, "Skater");
// paul.lastName = "Meyers";
// console.log(paul);
// paul.calculateAge();

// var personProto = {
//     calculateAge: function() {
//         console.log(2019 - this.dob);
//     }
// }

// var marie = Object.create(personProto);
// marie.name = "Marie";
// marie.dob = 1992;
// marie.occupation = "Model";

// var melB = Object.create(personProto, {
//     name: { value : "Mel B"},
//     dob: { value: 1990 },
//     job: { value: "Gymnast" }
// });

/** 
var years = [1990, 1987, 1999, 1997, 1989];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {

    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }

}

var ages = arrayCalc(years, calculateAge);

console.log(arrayCalc(years, calculateAge));
console.log(arrayCalc(years, isFullAge));
console.log(arrayCalc(ages, maxHeartRate));

*/

/*

//Functions returning fuctions

function interviewQuestion(job) {

    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX Design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log(name +  ', what subject do you teach?');
        }
    } else {
        return function(name) {
            console.log(name + ', what do you do?');
        }
    }

}

var teacherQuestion = interviewQuestion("teacher");
teacherQuestion('John');

interviewQuestion("designer")("Mark");

**/

//IIFE Functions

(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

// function () {

// }