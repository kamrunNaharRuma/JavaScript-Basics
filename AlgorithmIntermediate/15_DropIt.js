function dropElements(arr, func) {
    let validArr =[]
    let found =false;
    arr.forEach(
        (num, index) =>  {
            if(found){
                validArr.push(num)
            }
            else if(func(num)){
                validArr.push(num)
                found =true
            }
        }
    );
    console.log(validArr)
    return validArr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1; });
