function truthCheck(collection, pre) {

    const filteredArr = collection.filter((obj)=> !!obj[pre])
    return (filteredArr.length === collection.length);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
