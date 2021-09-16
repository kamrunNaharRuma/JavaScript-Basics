function titleCase(str) {
    let words = str.split(" ");
    let titleCaseStr = words.map((word)=> word[0].toUpperCase()+(word.substring(1).toLowerCase()))
                            .join(" ")
    return titleCaseStr;
}

titleCase("sHoRt AnD sToUt");
