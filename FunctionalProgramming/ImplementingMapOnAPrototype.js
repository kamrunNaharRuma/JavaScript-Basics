// The global variable
//Implement Map on a Prototype

var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
    var newArray = [...this];
    var finalArray = []
    // Only change code below this line
    for(let i = 0; i<newArray.length; i++){
        finalArray.push(callback(newArray[i]))
    }
    // Only change code above this line
    return finalArray;
};

var new_s = s.myMap(function(item) {
    return item * 2;
});
