function fearNotLetter(str) {
    const newArr = str.split("");
    const length = str.length;
    let missingChar = undefined;
    [...str].forEach(
        (letter, index) =>
        {
            if(
                (index+1 < length)
                && !(letter.charCodeAt() + 1 === newArr[index+1].charCodeAt())
            ){
                missingChar =  String.fromCharCode((letter.charCodeAt() + 1))
            }
        })
    return missingChar;
}

fearNotLetter("abce");
