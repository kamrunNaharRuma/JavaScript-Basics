function chunkArrayInGroups(arr, size) {
    let bhagphol = parseInt(arr.length / size);  //2
    let bhagshesh = (arr.length % size);
    let finalArray =[];
    let i =0;


    while(i < bhagphol){
        finalArray.push(arr.slice(size*i, size*(i+1)))
        i++
    }

    if(bhagshesh>0){
        finalArray.push(arr.slice(size*bhagphol))
    }
    console.log(finalArray)
    return finalArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5,6], 3);
