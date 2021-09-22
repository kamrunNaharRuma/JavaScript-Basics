function uniteUnique(...arr) {
    let newArr = [];
    arr.forEach(
        (array, index)=>{
            if(index === 0){
                newArr = newArr.concat(array)
            }
            if(index > 0 && index<arr.length){
                array.forEach((num)=>{
                    if(!arr[index-1].includes(num)){
                        newArr.push(num)
                    }
                })
            }
        }
    );
    return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
