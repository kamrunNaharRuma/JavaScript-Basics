function Animal(callSound: string) {
    this.callSound = callSound;
}

Animal.prototype.makeNoise = function (times: number = 5): void {
    while (times--) {
        console.log(this.callSound);
    }
}

const cat = new Animal("meow");

const hati = {
    callSound: "Pooooooooouuuuu!"
};

cat.makeNoise();

// hati, 3, bind, makeNoise, cat

const potato =  cat.makeNoise.bind(hati, 3);;
potato();

// Pooooooooouuuuu!
// Pooooooooouuuuu!
// Pooooooooouuuuu!
