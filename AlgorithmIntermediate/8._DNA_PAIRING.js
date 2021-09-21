function pairElement(str) {
    const newArr = str.split('');
    console.log(newArr);
    const dnaArray= newArr.map(base =>
        {
            if (base === "G"){
                return [base, "C"]
            }
            if (base === "C"){
                return [base, "G"]
            }
            if (base === "A"){
                return [base, "T"]
            }
            if (base === "T"){
                return [base, "A"]
            }
        }
    )
    return dnaArray;
}

pairElement("GCG");
