
// Assignment 1

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(); // 100000
console.log(1e5); // 100000
console.log(10 ** 5); // 100000
console.log(100000.0); // 100000
console.log(Math.round(100000.2)); // 100000
console.log(Math.round(99999.6)); // 100000
console.log(Math.ceil(99999.2)); // 100000
console.log(Math.floor(100000.9)); // 100000
console.log(Math.trunc(100000.9)); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Math.min(100000, 1000000, 10000000)); // 100000
console.log(Math.max(100000, 1000, 10000)); // 100000
console.log(parseInt("100000 Osama")); // 100000
console.log(+"100000"); // 100000

//Q2:

console.log(Number.MAX_SAFE_INTEGER);

//Q3:

console.log(Number.MAX_SAFE_INTEGER.toString().length); //16

//Q4:
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+(parseFloat(myVar).toFixed(2))); // 100.57

//Q5
let num5 = 10;

console.log(+Number.isInteger(num5) + +Number.isInteger(num5)); // 2

//Q6
let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(+(flt.toFixed(0))); // 10

//Q7
console.log(Math.round(Math.random()*4)); // 0 || 1 || 2 || 3 || 4