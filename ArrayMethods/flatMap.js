const array1 = [1, [2], [[1]]];
let flattened = array1.flatMap((num => num*1));
console.log(flattened)
