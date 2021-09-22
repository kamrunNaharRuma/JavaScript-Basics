function sumFibs(num) {
    let fibArr = [1,1];
    let sum = 2;
    while(sum <num){
        let newNum = fibArr[fibArr.length-1]+ fibArr[fibArr.length-2];
        if(newNum<=num) fibArr.push(newNum);
        if(newNum %2 !==0 && newNum<=num) sum+=newNum;
    }
    return sum;
}

sumFibs(4); 
