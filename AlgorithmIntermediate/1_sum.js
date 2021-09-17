function sumAll(arr) {
    const newArrayLength = Math.abs(arr[0]-arr[1]);
    const start = Math.min(...arr)
    const sum =Array(newArrayLength+1)
        .fill(start)
        .map((num, index) => num+(index))
        .reduce((acc, cur) => acc+cur,0);
    return sum;
}

sumAll([1, 4]);
