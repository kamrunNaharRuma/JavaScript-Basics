function spinalCase(str) {
    const re = (/[^0-9a-zA-Z]/);
    const reCap = (/^[A-Z]/);
    const array = str.split("");
    const resultArray = array.map(char => char.replace(re, "-") );
    const finalArray = resultArray.map((char, index) =>{if(reCap.test(char) && array[0] !== char){
        if(resultArray[index-1]!=="-"){
            return "-"+char.toLowerCase()
        }
        else{
            return char.toLowerCase()
        }
    }
    else
        return char.toLowerCase()
    } )
    return finalArray.join("")
}
console.log(spinalCase('thisIsSpinalTap'));
