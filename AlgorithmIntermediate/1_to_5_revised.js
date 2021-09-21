module.exports = function () {
    function sumAll(arr) {
        const newArrayLength = Math.abs(arr[0]-arr[1]);
        const start = Math.min(...arr)
        const sum =Array(newArrayLength+1)
            .fill(start)
            .map((num, index) => num+(index))
            .reduce((acc, cur) => acc+cur,0);
        return sum;
    }

    // sumAll([1, 4]);

    function diffArray(arr1, arr2) {

        const filteredArr1 = arr1.filter(num => !arr2.includes(num));
        const filteredArr2 = arr2.filter(num => !arr1.includes(num));
        const newArr = [...filteredArr1, ...filteredArr2];

        return newArr;
    }

    // diffArray([1, 2, 3, 4], [1, 2, 3, 6]);

    function destroyer(arr, ...argArray) {
        const filteredArr = arr.filter(num => !argArray.includes(num));
        return filteredArr;
    }

    // destroyer([1, 2, 3, 1, 2, 3], 2, 3);

    function whatIsInAName(collection, source) {
        const sourceEntries = Object.entries(source);

        return collection.filter(collectionItem =>
            sourceEntries.filter(sourcePair =>
                Object.entries(collectionItem).findIndex(
                    (collectionItemPair) =>
                        collectionItemPair[0] === sourcePair[0]
                        && collectionItemPair[1] === sourcePair[1]
                ) < 0
            ).length == 0
        )
    }


    // whatIsInAName(
    //     [
    //         { "apple": 1, "bat": 2 },
    //         { "bat": 2 },
    //         { "apple": 1, "bat": 2, "cookie": 2 }
    //     ],
    //     { "apple": 1, "bat": 2 }
    // )

    function spinalCase(str) {
        return str.split('').reduce((acc, char) => {
            if (!acc[0]) {
                return char.toLowerCase();
            }

            if (char.toUpperCase() === char.toLowerCase()) {
                return acc + '-';
            }

            const lastChar = acc[acc.length - 1];

            if (lastChar.toUpperCase() === lastChar.toLowerCase()) {
                return acc + char.toLowerCase();
            }

            if (
                lastChar === lastChar.toLowerCase()
                && char === char.toUpperCase()
            ) {
                return acc + '-' + char.toLowerCase();
            }

            return acc + char.toLowerCase();
        }, '');

        // return str
        //     .replace(/([a-z])([A-Z])/g, '$1-$2')
        //     .replace(/([a-z])[^a-z]([a-z])/ig, '$1-$2')
        //     .toLowerCase()

        // const re = (/[^0-9a-zA-Z]/);

        // const reCap = (/^[A-Z]/);

        // const array = str.split("");

        // const resultArray = array.map(char => char.replace(re, "-"));

        // const finalArray = resultArray.map(
        //     (char, index) => {
        //         if (reCap.test(char) && array[0] !== char) {
        //             if(resultArray[index-1] !== "-"){
        //                 return "-"+char.toLowerCase()
        //             } else {
        //                 return char.toLowerCase()
        //             }
        //         } else
        //             return char.toLowerCase()
        //         }
        // )

        // return finalArray.join("")
    }

    console.log(
        spinalCase(
            'This Is Spinal Tap thisIsSpinalTap The_Andy_Griffith_Show Teletubbies say Eh-oh AllThe-small Things'
        )
    );



}
