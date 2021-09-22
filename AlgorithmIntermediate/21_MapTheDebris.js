function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447 ;
    let newArr = arr.map(obj => {
        let formula = Math.pow(earthRadius+obj.avgAlt,3)/GM;
        let orbitalPeriod  = Math.round(2*Math.PI* Math.sqrt(formula))
        return {
            name : obj.name,
            orbitalPeriod : orbitalPeriod
        }
    })
    return newArr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
