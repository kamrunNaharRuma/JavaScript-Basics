function largestOfFour(arr) {
    let array = arr.map((eachArray)=> Math.max(...eachArray))
    return array;
}

largestOfFour([[4, 5, 1, 3000], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
