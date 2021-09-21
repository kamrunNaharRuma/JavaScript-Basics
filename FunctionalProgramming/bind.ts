function tomato(a,b,c) {
    console.log(`${c}: ${a * b} - ${this}`);
}

const potato = tomato.bind("kathal", 3, 2 );

potato("RED");

// RED: 6 - kathal


const greet = function (greeting: string, at: string) { //
    console.log(`${greeting} ${at}!`);
}

greet("Aloha", "Apu");

const hello = greet.bind(null, "Hello"); //
const hello2 = function (at: string) {
    greet("Hello", at);
}

hello("Samiha"); //

const hiOmran = greet.bind(null, "Hi", "Omran");

hiOmran();

const helloOmran = hello.bind(null, "Omran");

helloOmran();
