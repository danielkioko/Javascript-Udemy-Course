//Using Case & Function for coding challenge

//In this case, I check for every bill & return the total with it's tip.

//Not Sure why but it's not working :(

function calcTotal(amount) {

    var total = 0;

    switch(amount) {
        
        case amount < 50:
            total += (0.2 * amount) + amount;
            break;
        case (amount >= 50) && (amount <= 200):
            total += (0.15 * amount) + amount;  
            break; 
        case (amount < 50):
            total += (0.1 * amount) + amount;
            break;
    }

    return total;

}

console.log(calcTotal(124));