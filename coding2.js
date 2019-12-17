//Using Case & Function for coding challenge

//In this case, I check for every bill & return the total with it's tip.

//BASIC FUNCTION
function calcTip(bill) {

    var amount;

    if (bill < 50) {
        amount = (0.2 * bill) + bill; // 20% TIP

    } else if (bill >= 50 && bill <= 200) {
        amount = (0.15 * bill) + bill; //15% TIP

    } else if (bill > 200) {
        amount = (0.1 * bill) + bill; //10% TIP
        
    }

    return amount;

}

console.log(calcTip(124))

//CASE FUNCTION
//Not sure why, but it's not working :(
function calcTotal(amount) {

    var total = 0;

    switch(amount) {
        
        case amount < 50:
            total = (0.2 * amount) + amount;  
            break;

        case amount >= 50 && amount <= 200:
            total = (0.15 * amount) + amount;  
            break; 

        case (amount > 200):
            total = (0.1 * amount) + amount;
            break;

        default:
            console.log("👇🏼 There's an error :( ");

    }

  return total;

}

console.log(calcTotal(124));