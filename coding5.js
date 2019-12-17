
//Coding Challenge 5

var totalCosts = {
    "bills": [124, 248, 268, 180, 42],
    "tips": [], // Array for tips
    "finalBill": [] //Array for totals
}

var i;
for (i = 0; i < totalCosts.bills.length; i++) {

    var tipResult;
    var totalResult;

    // Calculate tip & total according to amount
    if (totalCosts.bills[i] < 50) {
        tipResult = totalCosts.bills[i] * 0.2; //20% Tip
        totalResult = tipResult + totalCosts.bills[i];

    } else if (totalCosts.bills[i] >= 50 && totalCosts.bills[i] <= 200){
        tipResult = totalCosts.bills[i] * 0.15; //15% Tip
        totalResult = tipResult + totalCosts.bills[i];

    } else if (totalCosts.bills[i] > 200){
        tipResult = totalCosts.bills[i] * 0.1; //10% Tip
        totalResult = tipResult + totalCosts.bills[i];

    }

    totalCosts.tips.push(tipResult);
    totalCosts.finalBill.push(totalResult);

}

console.log(totalCosts.tips);
console.log(totalCosts.finalBill);

var marksTotals = {
    "bills": [77, 375, 110, 45],
    "tips": [],
    "totals": []
}

var j;
for (j = 0; j < marksTotals.bills.length; j++) {

    var tipResult;
    var totalResult;

    // Calculate tip & total according to amount
    if (marksTotals.bills[i] < 100) {
        tipResult = marksTotals.bills[i] * 0.2; //20% Tip
        totalResult = tipResult + marksTotals.bills[i];

    } else if (marksTotals.bills[i] >= 100 && marksTotals.bills[i] <= 300){
        tipResult = marksTotals.bills[i] * 0.1; //10% Tip
        totalResult = tipResult + marksTotals.bills[i];

    } else if (marksTotals.bills[i] > 300){
        tipResult = marksTotals.bills[i] * 0.25; //25% Tip
        totalResult = tipResult + marksTotals.bills[i];

    }

    marksTotals.tips.push(tipResult);
    marksTotals.totals.push(totalResult);

}

console.log(marksTotals.tips);
console.log(marksTotals.totals);

function calculateAvgTip(){

    var i = 0;
    var johnSum = 0;
    while (i < totalCosts.tips.length) {
        johnSum += totalCosts.tips[i];
        i++;
    }

    var j = 0;
    var markSum = 0;
    while (j < marksTotals.tips.length) {
        markSum += totalCosts.tips[j];
        j++;
    }

    var johnTipsAvg = johnSum / totalCosts.tips.length;
    var markTipsAvg = markSum / marksTotals.tips.length;

    var result = ""

    if (johnTipsAvg > markTipsAvg) {
        result = "John's Family paid a higher tip averaging at " + johnTipsAvg;
    } else if (johnTipsAvg < markTipsAvg) {
        result = "Mark's Family paid a higher tip averaging at " + markTipsAvg;
    } else if ( johnTipsAvg == markTipsAvg) {
        result = "Both families paid the same tip averaging at " + johnTipsAvg;
    }

    return result;

}

console.log(calculateAvgTip());