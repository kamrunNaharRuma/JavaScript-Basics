// The global variable

//Implement the filter array method
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
    // Only change code below this line
    var newArray = [...this];
    var finalArray = [];
    for(let i = 0 ; i< newArray.length; i++){
        if(callback(newArray[i])){
            finalArray.push(newArray[i])
        }
    }
    console.log(finalArray)
    // Only change code above this line
    return finalArray;
};

var new_s = s.myFilter(function(item) {
    return item % 2 === 1;
});
