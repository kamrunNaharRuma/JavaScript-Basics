function myReplace(str, before, after) {
    const strArr = str.split(" ");
    let afterWord = "";
    if(before[0] === before[0].toUpperCase()){
        afterWord = after[0].toUpperCase()+after.substring(1);
    }else{
        afterWord = after[0].toLowerCase()+after.substring(1);
    }
    const indexOfBefore = strArr.findIndex(word => word === before);
    strArr.splice(indexOfBefore, 1, afterWord);
    return strArr.join(" ");
}
// function myReplace(str, before, after) {
//     let newAfter = '';
//
//     if (before[0] === before[0].toUpperCase()) {
//         newAfter = after[0].toUpperCase() + after.substr(1)
//     } else {
//         newAfter = after[0].toLowerCase() + after.substr(1)
//     }
//
//     return str.replace(before, newAfter);
//
//     // const strArr = str.split(" ");
//     // let afterWord = "";
//     // if(before[0] === before[0].toUpperCase()){
//     //     afterWord = after[0].toUpperCase()+after.substring(1);
//     // }else{
//     //     afterWord = after[0].toLowerCase()+after.substring(1);
//     // }
//     // const indexOfBefore = strArr.findIndex(word => word === before);
//     // strArr.splice(indexOfBefore, 1, afterWord);
//     // return strArr.jjoinoin(" ");
// }
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")

//He is Sitting on the couch
