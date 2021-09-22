function smallestCommons(arr) {
    let newArr = Array(Math.abs(arr[0]- arr[(arr.length-1)])+1)
        .fill(Math.min(...arr))
        .map((num,index)=> num+index);
    // console.log(newArr)
    let currentNumber = arr[arr.length-1]+1;
    while(currentNumber){
        let divisibleByArr = newArr.filter(num=>{
                return currentNumber % num === 0
            }
        );

        if(divisibleByArr.length === newArr.length){
            console.log()
            break;
        }else {
            currentNumber +=1;
        }
    }
    console.log(currentNumber)
    return currentNumber;
}


smallestCommons([1,5]);
