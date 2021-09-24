function rot13(str) {

    return str.split('').map(char => {
        if (char.toUpperCase() === char.toLowerCase()) {
            return char;
        } else {
            const ascii = char.charCodeAt(0);
            const letterOffset = ascii - 65;
            const newLetterOffset = (letterOffset + 13) % 26;
            const newAscii = newLetterOffset + 65;

            return String.fromCharCode(newAscii);
        }
    }).join('');
}
console.log((("N".charCodeAt(0)))-65)
console.log(((("N".charCodeAt(0)))-65)+13)
console.log((((("N".charCodeAt(0)))-65)+13)%26)
console.log(((((("N".charCodeAt(0)))-65)+13)%26)+65)
console.log(String.fromCharCode(79))
//console.log(("N".charCodeAt(0)-65 + 13)%26)
// console.log(String.fromCharCode(65+14))
// console.log(("A".charCodeAt(0)-65 + 13)%26)
// console.log(("N".charCodeAt(0)-65 + 13)%26)
// console.log(String.fromCharCode(65+14))
rot13("A");
