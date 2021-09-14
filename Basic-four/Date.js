// // const date1 = new Date();
// //
// // console.log(date1);
//
// //
// // const courses = [
// //     {id: 1, name: 'ru'},
// //     {id:2, name:'au'},
// //     {id:2, name:'su'},
// // ]
// //
// // courses.sort(function (a,b){
// //     if(a.name < b.name) return -1;
// //     if(a.name > b.name) return 1;
// //     return 0;
// // });
// //
// // const sorted = [
// //     {size: 100, name: 'B'},
// //     {size:10, name:'C'},
// //     {size:8, name:'A'},
// // ]
// //
// // sorted.sort(function (a,b){
// //     if(a.name > b.name) return -1;
// //     if(a.name < b.name) return 1;
// //     return 0;
// // });
// //
// // courses.sort(function (a,b){
// //     let val = 0;
// //     if(a.name > b.name && a.size < b.size){
// //         return 1;
// //     }
// //     if(a.name < b.name && a.size > b.size) return -1;
// //     return 0;
// // });
// // console.log(sorted);
//
// const sorted = [
//     {name: 'Elephant', size: 100},
//     {name: 'Witch', size: 30},
//     {name: 'Egg', size: 10},
//     {name: 'Electricity', size: 0.1},
//     {name: 'Eccentricity', size: 0},
//     {name: 'Ostrich', size: 40},
//     {name: 'Egg Plant', size: 20},
//     {name: 'Onion', size: 8},
//     {name: 'Wireless', size: 0},
//     {name: 'Oligarchy', size: 1000},
//
// ].sort((a, b) => {
//     // if(a.size >  b.size )
//     //     return 1; //change
//     // if(a.size < b.size )
//     //     return -1;  //do not change
//     // if(a.size === b.size )
//     //     if (a.name[0] < b.name[0])
//     //         return 1;
//     //     if (a.name[0] > b.name[0])
//     //         return -1;
//
//     if(a.name[0] >  b.name[0] )
//         return -1;
//     if(a.name[0] < b.name[0] )
//         return 1;
//     if(a.name[0] === b.name[0] )
//         if (a.size < b.size)
//             return -1;
//         if (a.size > b.size)
//             return 1;
//     return 0;
// });
//
// console.log(sorted);
// console.log(
//     "TASK 01 - TEST 1:",
//     sorted[0].name === 'Wireless' ? 'PASSED' : 'FAILED'
// );
//
// console.log(
//     "TASK 01 - TEST 2:",
//     sorted[sorted.length - 1].name === 'Elephant' ? 'PASSED' : 'FAILED',
//     '\n\n'
// );
// const data = [
//     {first: 'Rabbi', last: 'Mehedi'},
//     {first: 'Chubby', last: 'Mehedi'},
//     {first: 'Scrubby', last: 'Mehedi'},
//     {first: 'Lovely', last: 'Mehedi'},
// ];
//
// const merged = data.map((obj, i) => {
//
// });
//
// console.log(
//     'TASK 02 - TEST 1:',
//     merged[0].first === '---' ? 'PASSED' : 'FAILED'
// );
//
// console.log(
//     'TASK 02 - TEST 2:',
//     data[2].first === 'Scrubby' ? 'PASSED' : 'FAILED'
// );
//
// console.log(
//     'TASK 02 - TEST 3:',
//     merged[3].last === '+++' ? 'PASSED' : 'FAILED'
// );
//
// console.log(
//     'TASK 02 - TEST 4:',
//     data[1].last === 'Mehedi' ? 'PASSED' : 'FAILED'
// );
//
// console.log(
//     'TASK 02 - TEST 5:',
//     merged[1].fullname === 'Chubby Mehedi'
//         ? 'PASSED' : 'FAILED',
//     '\n\n'
// );
const combined = [
    {name: 'Rabbi', game: 'Skyrim', number: 2},
    {food: 'Ruti', passion: 'Booty', number: 30},
    {smell: 'Fruity', number: 10},
    {food: 'Burger', number: 3.14},
].reduce((acc, cur, i) => {

}, {});

console.log(combined);
console.log(
    'TASK 03 - TEST 1:',
    combined.name === 'Rabbi' ? 'PASSED' : 'FAILED'
);

console.log(
    'TASK 03 - TEST 2:',
    combined.passion === 'Booty' ? 'PASSED' : 'FAILED'
);

console.log(
    'TASK 03 - TEST 3:',
    combined.food === 'Burger' ? 'PASSED' : 'FAILED'
);

console.log(
    'TASK 03 - TEST 4:',
    Math.abs((combined.number - 45.14)) < 0.1 ? 'PASSED' : 'FAILED'
);
