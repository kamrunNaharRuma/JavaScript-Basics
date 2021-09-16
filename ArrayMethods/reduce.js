let a = [0, 1, 3, 4, 1, 1, 7, 1];

let b = a.reduce((acc, num)=>{
    return acc+ num;},0)
console.log(b)
