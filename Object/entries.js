const obj ={
    a : 1,
    b : 2,
    c : 3
}


for( const eachEntryInsideArray of Object.entries(obj)){
    console.log(eachEntryInsideArray)
}

for( const [key, value] of Object.entries(obj)){
    console.log(key)
    console.log(value)
}
