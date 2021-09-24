function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

console.log(beagle.numLegs)
console.log(beagle.name)
// Only change code below this line
