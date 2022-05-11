//1
console.log(10 * 20 - 15 % 3 + 190 + 10 - 400); // 0

//2

let num = 3;

// Solution One
console.log(num * (+true + +true)); // 6

// Solution Two
console.log(num + num); // 6

// Soultion Three
console.log(-(-num - num)); // 6

// Soultion Four
console.log((num % (num + +true)) * num - num); // 6

// Solution Five
console.log(num * num - num); // 6

// Solution Six
console.log("Write Your Code Here"); // 6

//3

let num3 = "10";

// Solution One
console.log(+num3 + +num3); // 20

// Solution Two
console.log(+num3 * (+true + +true)); // 20

// Solution Three
console.log((+num3 / (+true + +true)) + (+num3 / (+true + +true)) +(+num3 / (+true + +true)) + (+num3 / (+true + +true))); // 20

// Solution Four
console.log(++num3 + --num3 - +true); // 20
