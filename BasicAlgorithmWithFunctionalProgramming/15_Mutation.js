function mutation(arr) {
    let test = true;
    let fisrtArr = arr[0].toLowerCase().split("");
    let secondArr = arr[1].toLowerCase().split("");
    secondArr.some((char)=> fisrtArr.indexOf(char)===-1) ? test = false : null;
    return test;
}

console.log(mutation(["hello", "hey"]));
