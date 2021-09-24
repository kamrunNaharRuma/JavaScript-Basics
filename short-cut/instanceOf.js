function ConstructorBanailam(){
    prop1 = 1;
    prop2 = 2;
}

const obj = new ConstructorBanailam;

console.log(obj.hasOwnProperty("prop1"))
console.log(obj instanceof Object)
console.log(obj instanceof ConstructorBanailam)
