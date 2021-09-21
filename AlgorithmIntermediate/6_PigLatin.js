function translatePigLatin(str) {
    const regex = /^[aeiou]/ig;
    const strArr = str.split("");
    // return regex.test(str) ? str.concat("way")
    //         :
    if(regex.test(str)){
        return str.concat("way")
    }else{
        const consIndex = strArr.findIndex(char => regex.test(char));
        const removedCons =  strArr.splice(0,consIndex);
        const finalStr = strArr.concat(removedCons).join("")+"ay";
        return finalStr;
    }
}
// function translatePigLatin(str) {
//     const regex = /^[aeiou]/ig;
//     const strArr = str.split("");
//
//     if(regex.test(str)){
//         return str.concat("way")
//     }else{
//         return str.replace(/^([^aeiou]+)(.*)/ig, '$2$1ay')
//     }
// }

console.log( translatePigLatin("paragraphs") );
