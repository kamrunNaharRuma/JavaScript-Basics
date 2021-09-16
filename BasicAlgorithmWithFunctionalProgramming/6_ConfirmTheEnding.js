function confirmEnding(str, target) {
    let subStr = str.substring(str.length-target.length);
    return subStr===target;
}

confirmEnding("Bastian", "an");
