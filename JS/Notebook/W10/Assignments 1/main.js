/*
  Assignment 1
*/

//Q1
// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let mixed = mix
//     .map(function(el) {
//         return isNaN(parseInt(el)) ? el : "";
//     })
//     .reduce(function(acc, el) {
//         return `${acc}${el}`;
//     })
// console.log(mixed);
// Elzero

//Q2
// let myString = "EElllzzzzzzzeroo";

// let theString = myString
//     .split("")
//     .filter(function(el, i, array) {
//         return el !== array[i + 1];
//     })
//     .reduce(function(acc, el) {
//         return acc + el;
//     })
// console.log(theString);
// Elzero

//Q3
// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let newArray = myArray
//     .reduce(function(acc, el) {
//         return acc.concat(el);
//     }, [])
//     .join("");
// console.log(newArray);
// Elzero

//Q4
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let numsArrayN = numsAndStrings
//     .filter(function(el) {
//         return !isNaN(parseInt(el));
//     })
//     .map(function(el) {
//         return -el;
//     })
// console.log(numsArrayN);
// [-1, -10, 10, 20, -5, -3]


//Q5
let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums
    .reduce(function(acc, curr) {
        if (curr % 2 !== 0) {
            return acc + curr;
        } else {
            return acc * curr;
        }
    }, 1)
console.log(result);
// 500