//Inherit Behaviors from a Supertype
function Animal() {
    this.type = "living being"
}

Animal.prototype = {
    constructor: Animal,
    // type: "living being",
    eat: function() {
        console.log("nom nom nom");
    }
};

// Only change code below this line

let duck = Object.create(Animal.prototype)// Change this line
let beagle = Object.create(Animal.prototype); // Change this line

let pyacha = new Animal;
console.log(pyacha.type)
