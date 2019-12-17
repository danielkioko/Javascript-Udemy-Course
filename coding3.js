var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;

console.log(jane);
console.log(jane['birthYear']);

var james = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        return 2019 - this.birthYear;
    }
};

james.age = james.calcAge();
console.log(james);