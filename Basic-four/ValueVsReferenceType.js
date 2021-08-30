//value types : num, String, boolean, Symbol, undefined, null
//reference types : array, Function, Object

//primitives are copied by their value
//Objects are copied by their reference

let x = 10;
let y = x;
x= 20;

console.log(x,y);
let a = {value : 10};
let b = a;
a.value =30;
console.log(a,b);
