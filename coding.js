// var arr = ["L", "M", "N", "O", "P"];

// //check if a value exists
// console.log(arr.indexOf("Q")); // returns -1
// // if it returns '-1', the value is not in the array

// //CODING CHALLENGE

var bills = [124, 28, 268];
var tips = [];
var allTotals;

//First, I get the tip for every bill, then add it to the tips array
var i = 0;
while (i < bills.length) {

    if (bills[i] < 50) {
        var amount = 0.2 * bills[i]; // 20% TIP
        tips.push(amount); //I'll use '.push' to add every tip to the array
    } else if (bills[i] >= 50 && bills[i] <= 200) {
        var amount = 0.15 * bills[i]; //15% TIP
        tips.push(amount);
    } else if (bills[i] > 200) {
        var amount = 0.1 * bills[i]; //10% TIP
        tips.push(amount);
    }

    i++;

}

console.log(tips); // I checked the array, it works, but with large decimals.

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
console.log(voila); // The total is 471, somehow it doesn't have decimals :-)

// In another scenario, I've used case & fucntion to..
//..solve for each bill.
// That's like calling a function: calcTotal(124) and I get total + tip

//This is the link to the code: 



