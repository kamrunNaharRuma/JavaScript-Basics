function findLongestWordLength(str) {
    let words = str.split(" ");
    let sorted = words.sort((a,b)=> a.length > b.length ? -1 : 1);
    return sorted[0].length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
