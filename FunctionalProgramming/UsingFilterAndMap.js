////Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

const squareList = arr => {
    // Only change code below this line

    let intNumArr = arr
        .filter(number => Number.isInteger(number) && number>=0 )
        .map((number) => number*number)
    return intNumArr;
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
