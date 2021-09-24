function rot13(str) {
    const strArr = str.split(" ");
    const translatedArr = strArr.map((word)=>{
        let newWord = ""
        let i = 0;
        while(i <word.length){
            let asciVal = word.charCodeAt(i);
            let decodedAsciVal = word.charCodeAt(i)-13;

            if(asciVal>=65 || asciVal>=90 ){
                newWord = newWord.concat(String.fromCharCode(
                    decodedAsciVal<65  ? word.charCodeAt(i)+13 : word.charCodeAt(i)-13))
            }
            else{
                newWord = newWord.concat(word[i])
            }
            i++
        }
        return newWord;

    })
    return translatedArr.join(" ");
}

rot13("SERR CVMMN!");
