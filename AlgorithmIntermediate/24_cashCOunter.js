function checkCashRegister(price, cash, cid) {
    let convertingToDollar = cid;

    const returnMoney = cash - price;
    let i = 0;
    while(i< cid.length){
        if((cid[i][1] - returnMoney) > 0 ){
            cid[i][1] = cid[i][1] - returnMoney;
            let currency = cid[i][0];
            return {status: "CLOSED", change: cid.map(array =>{
                    array[0] === currency ? array[1] = returnMoney : array[1] = 0
                    return array
                }) }

        }
        i++
    }
    while(i< cid.length){
        if((cid[i][1] - returnMoney) === 0 ){
            cid[i][1] = cid[i][1] - returnMoney;
            let currency = cid[i][0];
            return {status: "CLOSED", change: cid.map(array =>{
                    array[0] === currency ? array[1] = returnMoney : array[1] = 0
                    return array
                }) }

        }
        i++
    }
    return {status: "INSUFFICIENT_FUNDS", change: []}
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
