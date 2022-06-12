/*
  Challenge 1
*/

/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

// function showDetails(par1, par2, par3) {
//     typeof par1 === 'string' ?
//         typeof par2 === 'number' ?
//         par3 ?
//         console.log(`Hello ${par1}, Your Age Is ${par2}, You Are Available For Hire`) :
//         console.log(`Hello ${par1}, Your Age Is ${par2}, You Are Not Available For Hire`) :

//         console.log("Unknown") :
//         console.log("Unknown");
// }

function showDetails(par1, par2, par3) {
    typeof par1 === 'string' && typeof par2 === 'number' && par3 ?
        console.log(`Hello ${par1}, Your Age Is ${par2}, You Are Available For Hire`) :
        typeof par1 === 'string' && typeof par2 === 'number' && !par3 ?
        console.log(`Hello ${par1}, Your Age Is ${par2}, You Are Not Available For Hire`) :
        typeof par1 === 'string' && typeof par3 === 'number' && par2 ?
        console.log(`Hello ${par1}, Your Age Is ${par3}, You Are Available For Hire`) :
        typeof par1 === 'string' && typeof par3 === 'number' && !par2 ?
        console.log(`Hello ${par1}, Your Age Is ${par3}, You Are Not Available For Hire`) :
        typeof par1 === 'number' && typeof par2 === 'string' && par3 ?
        console.log(`Hello ${par2}, Your Age Is ${par1}, You Are Available For Hire`) :
        typeof par1 === 'number' && typeof par2 === 'string' && !par3 ?
        console.log(`Hello ${par2}, Your Age Is ${par1}, You Are Not Available For Hire`) :
        typeof par1 === 'number' && typeof par3 === 'string' && par2 ?
        console.log(`Hello ${par3}, Your Age Is ${par1}, You Are Available For Hire`) :
        typeof par1 === 'number' && typeof par3 === 'string' && !par2 ?
        console.log(`Hello ${par3}, Your Age Is ${par1}, You Are Not Available For Hire`) :
        typeof par3 === 'number' && typeof par2 === 'string' && par1 ?
        console.log(`Hello ${par2}, Your Age Is ${par3}, You Are Available For Hire`) :
        typeof par3 === 'number' && typeof par2 === 'string' && !par1 ?
        console.log(`Hello ${par2}, Your Age Is ${par3}, You Are Not Available For Hire`) :
        typeof par2 === 'number' && typeof par3 === 'string' && par1 ?
        console.log(`Hello ${par2}, Your Age Is ${par3}, You Are Available For Hire`) :
        typeof par2 === 'number' && typeof par3 === 'string' && !par1 ?
        console.log(`Hello ${par3}, Your Age Is ${par2}, You Are Not Available For Hire`) :
        console.log("Unknown");
}


showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"