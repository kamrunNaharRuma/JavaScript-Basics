function bouncer(arr) {
    return arr.filter((element)=> !!element);
}

bouncer([7, "ate", "", false, 9]);
