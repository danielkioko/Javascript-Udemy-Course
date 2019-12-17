

// A number to the power of 2 in JavaScript is (height ** 2)
// I have assigned random numbers for mass & height for both Mark & John

//Object for Mark
var mark = {
    fullName: 'Mark Meyer',
    mass: 58.8,
    height: 1.98,
    calcBMI: function() { 
        return this.mass / (this.height ** 2); //Calculate his BMI
    }
}
mark.bmi = mark.calcBMI();

//Object for John
var john = {
    fullName: 'John Neilson',
    mass: 59.7,
    height: 1.87,
    calcBMI: function() {
        return this.mass / (this.height ** 2); //Calculate his BMI
    }
}
john.bmi = john.calcBMI();

// This will compare their BMI's and return who has the higher BMI...
// ...or return both if they have equal BMIs.
if (john.bmi > mark.bmi) {
    console.log(john.fullName + " has a higher BMI of " + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + " has a higher BMI of " + mark.bmi);
} else if (mark.bmi == john.bmi) {
    console.log( "Both " + john.fullName + " & " + mark.fullName + " have a BMI of " + mark.bmi);
}