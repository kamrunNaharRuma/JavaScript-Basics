console.log( false || 'ruma');
console.log( null || 'ruma');
console.log( 0 || 'ruma');
console.log( NaN || 'ruma');
console.log( undefined || 'ruma');

console.log( true || 'ruma');

console.log(false || 'ruma' || 'durjoy');


//let userColor ='yellow';
let userColor =null;
let defalutColor = 'blue';

let currentColor = userColor || defalutColor;
console.log(currentColor);
