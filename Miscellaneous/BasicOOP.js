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


//Set the Child's Prototype to an Instance of the Parent
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

function Dog() { }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();

//######Reset an Inherited Constructor Property


function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line


Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor);


//###########Add Methods After Inheritance
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){
    console.log("Woof!");
}



// Only change code above this line

let beagle = new Dog();

console.log(beagle.bark())




//////////////Overrriding methods
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function (){
    return "Alas, this is a flightless bird.";
}
// Only change code below this line



// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());


/////Mixin
let glideMixin = function (obj) {
    obj.glide = function(){
        console.log("gliding........ ....... .....");
    }
}

let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

glideMixin(bird);
glideMixin(boat);


console.log(bird.glide());
console.log(boat.glide());
// Only change code below this line


///////////////// Closure
function Bird() {
    let weight = 15;

    this.getWeight = function (){
        return weight;
    }
}

//////IIFE
(function() {
    console.log("A cozy nest is ready");
})();


//Module
let funModule = (function(){
    return {

        isCuteMixin :function(obj) {
            obj.isCute = function() {
                return true;
            };
        },
        singMixin : function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            };
        }

    }
})();


console.log(funModule)

let testObject ={};
funModule.isCuteMixin(testObject);
funModule.singMixin(testObject);

console.log(testObject);


