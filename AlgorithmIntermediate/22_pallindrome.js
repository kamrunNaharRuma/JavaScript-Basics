function palindrome(input) {
    const regexAlphaNeu = /[^a-z0-9]/ig
    const str = input.replace(regexAlphaNeu, "");
    const strLen = str.length;
    const firstHalf = str.substring(0,parseInt(strLen/2)).toLowerCase().split("").reverse().join("")
    const secondHalf =
        strLen%2===0
            ? str.substring(parseInt(strLen/2)).toLowerCase()
            : str.substring(parseInt(strLen/2)+1).toLowerCase()
    return firstHalf===secondHalf;
}



palindrome("eye");
