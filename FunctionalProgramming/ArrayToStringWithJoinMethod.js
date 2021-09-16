//Combine an Array into a String Using the join Method

function sentensify(str) {
    // Only change code below this line
    let newArray = str.split(/\W/);
    return newArray.join(" ");

    // Only change code above this line
}
console.log(sentensify("The-force.is.strong.with.this.one"));
