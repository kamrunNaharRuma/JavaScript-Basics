const ektaObject = {
    a: 2,
    b: 3,
    c: 4
}

const ektaRandomFunction = function(...args){

    const kothinFormula = 5+1902*23+345/(345/2)+123;

    console.log(this);
    console.log(args)
    console.log(kothinFormula / args[0])

    return [this, args]
}


const notunFunction = ektaRandomFunction.bind(ektaObject, 2, 3)

console.log(notunFunction())
ektaRandomFunction()

function impartial(x, y, z) {
    return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13
