// find the largest number in the array
// use a for loop when dealing with arrays

function findLargestNumber(list) { // define the function 
    // return the largest number in the array
    let largest = list[0]; // declare the largest element in the list 

    for (let i = 1; i < list.length; i++) { // for loop to iterate through list of elements
        if (list[i] > largest) { // if i is larger than the largest number
            largest = list[i]; // update i to that number
        }
    }

    return largest; // return the largest element at the end of the loop  
}

console.log(findLargestNumber([0663, 10, 15, 32, 12, 100, 924, 92491, 09241991]));