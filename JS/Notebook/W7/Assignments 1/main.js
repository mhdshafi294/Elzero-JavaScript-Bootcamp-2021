/*
  Assignment 1
*/

//Q1

/* let start = 10;
let end = 100;
let exclude = 40;

// Output
10
20
30
50
60
70
80
90
100

// Answer

for (let i = start; i <= end; i += start) {
    if (i == exclude) {
        continue;
    } else {
        console.log(i);
    }
} */

//Q2
/* let start = 10;
let end = 0;
let stop = 3;

// Output
10
09
08
07
06
05
04
03
// Answer
for (let i = start; i >= stop; i--) {
    if (i < start) {
        console.log(end, i);
    } else {
        console.log(i);
    }
} */

//Q3
/* let start = 1;
let end = 6;
let breaker = 2;

// Output
// 1
// --2
// --4
// 2
// --2
// --4
// 3
// --2
// --4
// 4
// --2
// --4
// 5
// --2
// --4
// 6
// --2
// --4

// Answer
for (let i = start; i <= end; i++) {
    console.log(`${i}`);
    console.log(`--${breaker}`);
    console.log(`--${end - breaker}`);
} */

//Q4
/* let index = 10;
let jump = 2;
let end = 0;

for (;;) {
    // Write Your Code Here
    console.log(index);
    index = index - jump;
    if (index === jump) {
        break;
    }
}

// Output
// 10
// 8
// 6
// 4 */


//Q5
/* let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

//Answer
counter = letter.length;
for (let element of friends) {
    if (element.toLocaleLowerCase().startsWith(letter)) {
        continue;
    } else {
        console.log(`${counter} => ${element}`)
        counter++
    }

} */

//Q6
/* let start = 0;
let swappedName = "elZerO";
let newName = "";

for (let i = start; i < swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toUpperCase()) {
        newName += swappedName[i].toLowerCase();
    } else {
        newName += swappedName[i].toUpperCase();
        // console.log(swappedName[i].toUpperCase());
    }
}
console.log(newName); */

//Q7
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
// 2
// 3
// 4

//Answer

for (let i = ++start; i < mix.length; i++) {
    if (typeof mix[i] === "number") {
        console.log(mix[i]);
    }
}