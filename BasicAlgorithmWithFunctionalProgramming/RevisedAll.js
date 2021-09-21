

module.exports = () => {
    function factorialize(num) {
        return num <= 1 ? 1 : (num * factorialize(num-1))
    }

    function findLongestWordLength(str) {
        let words = str.split(" ");
        let sorted = words.sort((a,b)=> a.length > b.length ? -1 : 1);
        return sorted[0].length;
    }

    function findLongestWordLength2(str) {
        return Math.max(...str.split(' ').map(word => word.length));
    }

    function largestOfFour(arr) {
        let array = arr.map((eachArray)=> Math.max(...eachArray))
        return array;
    }

    function confirmEnding(str, target) {
        let subStr = str.substring(str.length-target.length);
        return subStr===target;
    }

    function repeatStringNumTimes(str, num) {
        let string = "";
        for(let i = 0; i<num; i++){
            string+=str
        }
        return string
    }

    function repeatStringNumTimes2(str, num) {
        return Array(num).fill(str).join('');
    }

    function truncateString(str, num) {
        let truncated = str.substring(0,num)
        return str.length > num ? truncated + "..." : truncated;
    }

    function findElement(arr, func) {
        let filteredArray  = arr.filter(func);
        return filteredArray[0];
    }

    function findElement2(arr, func) {
        return arr.findElement(func);
    }

    function titleCase(str) {
        let words = str.split(" ");
        let titleCaseStr = words
            .map((word)=> word[0].toUpperCase()+(word.substring(1).toLowerCase()))
            .join(" ")
        return titleCaseStr;
    }

    function frankenSplice(arr1, arr2, n) {
        let arr3 = [...arr2];
        arr3.splice(n, 0, ...arr1);
        return arr3;
    }


    function chunkArrayInGroups2(arr, size) {
        return Array(
            Math.ceil(arr.length / size)
        ).fill(null).map(
            (_, i) => arr.slice(size*i, size*(i + 1))
        );
    }

    function chunkArrayInGroups3(arr, size) {
        return arr.reduce((acc, cur) => {
            return !acc.length || acc[acc.length - 1].length === size
                ? [...acc, [cur]]
                : [...acc.slice(0, -1), [...acc[acc.length - 1], cur]]
        }, []);
    }

    function factorialize2(n) {
        return Array(n)
            .fill(0)
            .map((_, i) => i + 1)
            .reduce((a, b) => a * b, 1);
    }

    console.log(factorialize2(5));

    function bouncer(arr) {
        return arr.filter((element)=> !!element);
    }

    function getIndexToIns(arr, num) {
        let newArr = arr;
        newArr.sort((a, b) => a - b);
        let index =newArr.findIndex(element => element>= num)
        return index === -1 ? arr.length : index
    }

    function mutation(arr) {
        let test = true;
        let fisrtArr = arr[0].toLowerCase().split("");
        let secondArr = arr[1].toLowerCase().split("");
        secondArr.some((char)=> fisrtArr.indexOf(char)===-1) ? test = false : null;
        return test;
    }

    function booWho(bool) {
        return bool === false || bool === true;
    }

    function chunkArrayInGroups(arr, size) {
        let bhagphol = parseInt(arr.length / size);  //2
        let bhagshesh = (arr.length % size);
        let finalArray =[];
        let i =0;

        while(i < bhagphol){
            finalArray.push(arr.slice(size*i, size*(i+1)))
            i++
        }
        if(bhagshesh>0){
            finalArray.push(arr.slice(size*bhagphol))
        }
        console.log(finalArray)
        return finalArray;
    }
}

