function destroyer(arr) {
    const argArray = Object.values(arguments).slice(1);
    const filteredArr = arr.filter(num => !argArray.includes(num));
    return filteredArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
