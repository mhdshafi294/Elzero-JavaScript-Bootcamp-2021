/*
  Assignment 1
*/

// Q1

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;


// Method 1
console.log(myFriends.slice(myFriends.indexOf("Ahmed"), num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Q2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]

// Q3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo);
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// Q4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length, words[website.length][0].length).toUpperCase()); // ZERO
// Q5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
    console.log("Found1")
}
if (haystack.lastIndexOf(needle) !== -1) {
    console.log("Found2");
}
for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
        console.log("Found3");
    }
}


// Q6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr1.concat(arr2).sort().slice(-arr1.length).join("").toLowerCase();
console.log(allArrs); // fxy