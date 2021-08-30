//object is not iterable

const circle = {
    radius: 20,
    color: 'red'
}

for( let key in circle){
    console.log(key, circle[key]);
}

for ( let key of Object.keys(circle)){
    console.log(key);
}
