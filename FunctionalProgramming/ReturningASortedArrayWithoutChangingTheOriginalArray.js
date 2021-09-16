


var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    // Only change code below this line
    let newArray = [...arr];
    newArray.sort((a,b)=> a===b ? -1 : a < b ? -1 : 1)
    return newArray

    // Only change code above this line
}
nonMutatingSort(globalArray);
