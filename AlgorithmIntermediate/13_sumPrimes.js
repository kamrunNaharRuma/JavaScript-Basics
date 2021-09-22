function sumPrimes(num) {
    const array = Array(num).fill(1).map((num, index)=>num+index)
    let fibArr = []
    array.forEach((num)=>{
            if(num ===2){
                fibArr.push(num)
            }else if(num>2){
                let compareArr = fibArr.slice(0,(fibArr.length+1));
                let filterArr = compareArr.filter(compNum =>
                    num % compNum === 0
                )
                if(filterArr.length===0){
                    fibArr.push(num)
                }
            }
        }
    )
    return fibArr.reduce((acc,cur)=> acc+cur);
}

sumPrimes(10);
