/*
  Challenge 1
*/

/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my = my.slice(zero, ++counter).reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, --counter)); // ["Elham", "Mazero"]

elzero = my[zero].substring(--zero, --counter) + my[counter].substring(++zero + zero);
console.log(elzero); // "Elzero"

console.log(elzero[counter + counter] + elzero.substring(counter + ++counter).toUpperCase()); // "rO"