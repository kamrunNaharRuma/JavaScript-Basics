const person = {
    name: 'ruma',
    age:28
};

const color = ['red', 'green', 'black']
for(let key in person){
    console.log(key);
}
for(let key in person){
    console.log(person[key]);
}

for(let index in color){
    console.log(index);
}

for(let index in color){
    console.log(color[index]);
}
