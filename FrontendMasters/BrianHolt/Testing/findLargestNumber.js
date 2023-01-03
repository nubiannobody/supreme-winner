// find the largest number in the array
// use a for loop when dealing with arrays

function findLargestNumber(list) {
    // return the largest number in the array
    let largest = list[0];

    for (let i = 0; i < list.length; i++) {
        if (list[i] > largest) {
            largest = list[i];
        }
    }

    return largest;
}

console.log(findLargestNumber([0663, 10, 15, 32, 12, 100, 924, 92491, 09241991]));