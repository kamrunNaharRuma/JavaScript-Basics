function getIndexToIns(arr, num) {
    let newArr = arr;
    newArr.sort((a, b) => a - b);
    let index =newArr.findIndex(element => element>= num)
    return index === -1 ? arr.length : index
}

console.log(getIndexToIns([2, 5, 10], 15));
