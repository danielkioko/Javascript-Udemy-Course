function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn);
console.log(ageJohn, ageMike, ageJane);


//Function Declaration
function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement < 0) {
        console.log(firstName + " should have retired " + (retirement * (-1)) + " years ago");
    } else {
        console.log(firstName + " retires in " + retirement + " years.");
    }
}

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1948, "Mike");
yearsUntilRetirement(1969, "Jane");

//Function Expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful UIs';
        default:
            return firstName + ' does something else';
    }
}
console.log(whatDoYouDo('designer', 'Jane'));