/*
  Assignment 1
*/

//Q1
// function getDetails(zName, zAge, zCountry) {
//     function namePattern(zName) {
//         // Write Your Code Here
//         // Osama Mohamed => Osama M.
//         // Ahmed ali => Ahmed A.
//         let nameArray = zName.split(' ');
//         return `${nameArray[0]} ${nameArray[1][0].toUpperCase()}.`;
//     }

//     function ageWithMessage(zAge) {
//         // Write Your Code Here
//         // 38 Is My Age => Your Age Is 38
//         // 32 Is The Age => Your Age Is 32
//         let ageArray = zAge.split(' ');
//         return `Your Age Is ${ageArray[0]}`;

//     }

//     function countryTwoLetters(zCountry) {
//         // Write Your Code Here
//         // Egypt => You Live In EG
//         // Syria => You Live In SY
//         let countryInit = zCountry.substring(0, 2).toUpperCase();
//         return countryInit;
//     }

//     function fullDetails() {
//         // Write Your Code Here
//         return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`;
//     }
//     return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY


//Q2
//1
/* function itsMe() {
  return `Iam A Normal Function`;
} */
// let itsMe = () => `Iam A Normal Function`;
// console.log(itsMe()); // Iam A Normal Function

// //2
// /* function urlCreate(protocol, web, tld) {
//     return `${protocol}://www.${web}.${tld}`;
// } */
// let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

//Q3
// function checker(zName) {
//     return function(status) {
//         return function(salary) {
//             return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//         };
//     };
// }

// let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

//Q4
function specialMix(...data) {
    // Your Code Here
    let counter = 0;

    for (let i = 0; i < data.length; i++) {
        if (parseInt(data[i])) {
            counter += parseInt(data[i]);
        }
    }
    if (counter === 0 && data.length) {
        counter = "All Is Strings";
    }
    return counter;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings