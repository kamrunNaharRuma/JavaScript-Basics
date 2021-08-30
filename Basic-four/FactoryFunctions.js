function  createCircleObject(radius){
    return{
        radius,
        draw() {
            console.log('draw');
        }
        // draw:  function (){
        //     console.log('draw');
        // }
    };
}


const circle1 =  createCircleObject(1);
console.log(circle1);
