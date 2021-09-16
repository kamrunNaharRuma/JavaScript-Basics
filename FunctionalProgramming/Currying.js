//Currying
function add(x) { //10


                  // Only change code below this line
    return function(y){ //20
        return function(z){ //30
            return x+y+z
        }
    }

    // Only change code above this line
}
add(10)(20)(30);
