/*
  Challenge 2
*/

/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let index1 = 0;

document.write(`<div>We Have ${myAdmins.indexOf("Stop")} Admins</div>`);

while (myAdmins[index1] !== "Stop") {
    document.write(`<hr>`);
    document.write(`<div>
    The Admin For Team ${index1+1} Is ${myAdmins[index1]}
    <h3>Team Members:</h3>`);
    let index2 = 0;
    let membersCounter = 1;
    while (index2 < myEmployees.length) {
        if (myEmployees[index2][0] === myAdmins[index1][0]) {
            document.write(`<p> - ${membersCounter++} ${myEmployees[index2]} </p>`);
        }
        index2++
    }
    document.write(`</div>`);
    index1++
}