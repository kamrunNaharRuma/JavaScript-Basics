let str = "IamRuma$$$$@KNRRumaruma";
let regex =/ruma/i
let regexToArr =/[^a-z]/ig
// console.log(regex.test(str))
// console.log(str.match(regex))
//console.log(str.match(regexToArr))
let newS = str.replace(regexToArr,"p")
console.log(newS)
