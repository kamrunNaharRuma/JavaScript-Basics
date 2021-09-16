let obj ={
    a: "2",
    b: 3,
    // c: function(){
    //   console.log(this)
    // }
}

let amarFunction = function (){
    console.log(this.a);
    console.log(this.b);
    return this;
}

let callthis = amarFunction.bind(obj);
callthis()
