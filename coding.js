// var arr = ["L", "M", "N", "O", "P"];

// //check if a value exists
// console.log(arr.indexOf("Q")); // returns -1
// // if it returns '-1', the value is not in the array

// //CODING CHALLENGE

var bills = [124, 28, 268];
var tips = [];
var allTotals;

var i = 0;
while (i < bills.length) {

    if (bills[i] < 50) {
        var amount = 0.2 * bills[i];
        tips.push(amount);
    } else if (bills[i] >= 50 && bills[i] <= 200) {
        var amount = 0.15 * bills[i];
        tips.push(amount);
    } else if (bills[i] > 200) {
        var amount = 0.1 * bills[i];
        tips.push(amount);
    }

    i++;

}

console.log(tips);

//Getting the sum of bills
var j = 0;
var billSum = 0;
while (j < bills.length) {

    //Sum of bills
    billSum += bills[j];
    j++;

}

//Getting the sum of tips
var k = 0;
var tipSum = 0;
while (k < tips.length) {
    
    //Sum of tips
    tipSum += tips[k];
    k++;
}

//Overall Total
var voila = billSum + tipSum;
console.log(voila);



