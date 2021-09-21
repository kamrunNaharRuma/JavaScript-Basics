function whatIsInAName(collection, source) {
    const matchedArr = collection.filter(obj =>
    {
        for(let key in source){
            if(!(obj.hasOwnProperty(key) && obj[key]===source[key]))
                return false
        }
        return true
    })
    return matchedArr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
