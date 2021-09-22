function steamrollArray(arr) {
    //console.log(typeof(arr[0]))
    let flatArr = [];
    arr.forEach( (elem)=> {
        let cur = elem;
        if(cur[0] === undefined && cur.constructor !== Array){
            flatArr.push(cur)
        }
        else{
            cur.forEach(cur =>{
                    while(typeof cur === "object"){
                        cur = cur[0]
                    }
                    flatArr.push(cur)
                }
            )
        }




    })
    console.log(flatArr)
    return flatArr;
}

steamrollArray([1, {}, [3, [[4]]]])
