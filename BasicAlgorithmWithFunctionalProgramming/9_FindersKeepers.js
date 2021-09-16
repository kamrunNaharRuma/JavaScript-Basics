function findElement(arr, func) {
    let filteredArray  = arr.filter(func);
    return filteredArray[0];
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
