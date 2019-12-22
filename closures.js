//Closures

function retirement(retirementAge) {
    var a = ' years left until age.';
    return function(yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log(retirementAge - age) + a;
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirement(65)(1990);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

/**An inner function always has
 access to the variables even after the 
 outer function has returned
 */