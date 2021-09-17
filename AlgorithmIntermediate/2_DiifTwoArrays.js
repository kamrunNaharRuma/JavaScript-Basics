function diffArray(arr1, arr2) {

    const filteredArr1 = arr1.filter(num => !arr2.includes(num));
    const filteredArr2 = arr2.filter(num => !arr1.includes(num));
    const newArr = [...filteredArr1, ...filteredArr2];
    return newArr;
}

diffArray([1, 2, 3, 4], [1, 2, 3, 6]);
