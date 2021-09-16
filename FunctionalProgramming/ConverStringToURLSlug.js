// Only change code below this line
function urlSlug(title) {
    let newArray = title.split(/\s+/).map(word => word.toLowerCase()).join("-");
    //let newArray = title.split(/\s+/).map(word => word.toLowerCase()).join("-");
    console.log(newArray)
    return newArray;

}

urlSlug("Winter Is Coming");
//winter-is-coming
// Only change code above this line
