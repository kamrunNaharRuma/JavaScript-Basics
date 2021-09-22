function addTogether(...argArr) {
    if(argArr.length === 2 && typeof argArr[1] === "number"){
        return argArr[0]+argArr[1]
    }else if (argArr.length=== 1 && typeof argArr[0] === "number"){
        return ( num) => {
            if(typeof num === "number")
                return argArr[0] + num
        }
    }

}
//addTogether(2,"3");

console.log(addTogether(5)(7))
