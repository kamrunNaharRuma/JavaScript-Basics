const  circle={

        radius :34,
        draw() {
            console.log('draw');
        }


}


// const another = {};
// for(let key in circle){
//     another[key] = circle[key];
// }


// const another = Object.assign({
//
// },circle);
//Spread Object
const another ={...circle}; //put all the props from the circle object
console.log(another);


