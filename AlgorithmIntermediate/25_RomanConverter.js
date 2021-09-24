function toRoman(num) {
    const letters = ['I', 'V', 'X', 'L', 'C', 'D',  'M'];

    const numstr = `${num}`;

    return numstr.split('').map((char, i) => {
        const ghor = numstr.length - 1 -  i;
        const targetIndex = ghor * 2;
        const num = parseInt(char);

        if (num === 9) {
            return letters[targetIndex] + letters[targetIndex + 2];
        } else if (num === 4) {
            return letters[targetIndex] + letters[targetIndex + 1];
        } else if (num < 4) {
            return Array(num).fill(letters[targetIndex]).join('');
        } else if (num >= 5) {
            return letters[targetIndex + 1] + Array(num - 5).fill(
                letters[targetIndex]
            ).join('');
        }
    }).join('');
}

for (let i = 0; i <= 10; i++) {
    console.log(i*100, toRoman(i*100));
}

console.log(toRoman(90));
console.log(toRoman(97)); // XCVII
