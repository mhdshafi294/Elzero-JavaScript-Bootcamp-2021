/*
  Assignment 2
*/

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let letter = "a";

// Output
// "1 => Sayed"
// "2 => Mahmoud"

//Answer
// for (let element of friends) {
//     if (typeof(element) === "number") {
//         continue;
//     }
//     if (element.toLowerCase().startsWith(letter)) {
//         continue;
//     } else {
//         console.log(`${++counter} => ${element}`)

//     }
// }

for (let i = index; i < friends.length; i++) {
    if (typeof(friends[i]) === "number") {
        continue;
    } else if (friends[i].toLowerCase().startsWith(letter)) {
        continue;
    } else {
        console.log(`${++counter} => ${friends[i]}`)
    }
}