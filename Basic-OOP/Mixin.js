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
