function addTwo(number) { // declare a function with the parameter of number
    return number + 2; // return statement that takes a paramter and adds 2 to it
}

console.log(addTwo(5)); //  prints statement plus the calling of the addTwo method the answer is 7

// this is a function with no parameters 

// function returnFive() {
//     return 5;
// }

// console.log(returnFive());

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(8, 5));

const finalAnswer = addTwo(5); 
const finalAnswer2 = addTwo(10); 
const finalAnswer3 = add(5, 10); 

console.log(finalAnswer); // 7
console.log(finalAnswer2); // 12
console.log(finalAnswer3); // 15