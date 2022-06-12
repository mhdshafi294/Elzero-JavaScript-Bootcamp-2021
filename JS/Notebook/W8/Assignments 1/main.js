/*
  Assignment 1
*/

//Q1
/* function sayHello(theName, theGender) {
    if (theGender == null) {
        console.log(`Hello ${theName}`)
    } else if (theGender === "Male") {
        console.log(`Hello Mr. ${theName}`)
    } else if (theGender === "Female") {
        console.log(`Hello Ms. ${theName}`)
    }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh" */

//Q2
/* function calculate(firstNum, secondNum, operation) {
    // Your Code Here
    if (secondNum == null) {
        console.log(`You need to put a second number`)
    } else if (operation === "add") {
        console.log(firstNum + secondNum)
    } else if (operation === "subtract") {
        console.log(firstNum - secondNum)
    } else if (operation === "multiply") {
        console.log(firstNum * secondNum)
    }

}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600 */


//Q3
/* function ageInTime(theAge) {
    // Your Code Here
    if (theAge < 100 && theAge > 10) {
        console.log(`${theAge * 12} Months`)
        console.log(`${Math.floor((theAge * 365) /76) } Weeks`)
        console.log(`${theAge * 365} Days`)
        console.log(`${theAge * 365 * 24} Hours`)
        console.log(`${theAge * 365 * 24 * 60} Minutes`)
        console.log(`${theAge * 365 * 24 * 60 * 60} Seconds`)
    } else {
        console.log("Age Out Of Range")
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months */

//Q4
//Find the solution in The Challange of week8

//Q5
/* function createSelectBox(startYear, endYear) {
    // Your Code Here
    select = document.createElement('select');
    select.id = "mySelect";
    document.body.appendChild(select);

    for (let i = startYear; i <= endYear; i++) {
        let opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    }
}
createSelectBox(2000, 2021); */

//Q6
function multiply(...paras) {
    let result = 1;
    for (let element of paras) {
        if (typeof element === 'string') {
            continue;
        } else {
            result = result * Math.floor(element);
        }
    }
    console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

//Q7

//Q8