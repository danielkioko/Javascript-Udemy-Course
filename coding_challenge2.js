var John = [89, 120, 103];
var Mike = [116, 94, 123];

var avgJohn = (89 + 120 + 103) / 3;
var avgMike = (116 + 94 + 123) / 3;
var avgMary = (97 + 134 + 105) / 3;

if (avgJohn > avgMike && avgJohn > avgMary) {
    console.log("Jonh Won The Game with a score of: " + avgJohn);
    console.log("Mike had a score of: " + avgMike);
    console.log("Mary had a score of: " + avgMary);
} else if (avgMike > avgJohn && avgMike > avgMary) {
    console.log("Mike Won The Game with a score of: " + avgMike);
    console.log("John had a score of: " + avgJohn);
    console.log("Mary had a score of: " + avgMary);
} else if (avgMary > avgJohn && avgMary > avgMike) {
    console.log("Mike Won The Game with a score of: " + avgMike);
    console.log("John had a score of: " + avgJohn);
    console.log("Mary had a score of: " + avgMary);
} else if (avgJohn  == avgMike && avgMike == avgMary && avgMary == avgJohn) {
    console.log("All Mike, Mary and John Tied with a score of: " + avgMike);
}