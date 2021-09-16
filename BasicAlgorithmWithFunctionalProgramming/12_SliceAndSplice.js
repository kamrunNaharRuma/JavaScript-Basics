function frankenSplice(arr1, arr2, n) {
    let arr3 = [...arr2];
    arr3.splice(n, 0, ...arr1);
    return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
