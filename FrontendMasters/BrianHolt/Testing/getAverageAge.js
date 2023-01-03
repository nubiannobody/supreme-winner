function getAverageAge(list){ // declare the function with a parameter of list
    // using the same list as above, get the average age of all the workers'

    let sum = 0; // set sum equal to zero 

    for (let i = 0; i < list.length; i++) { // declare a for loop to iterate through list of ages
        sum += list[i].age; // add the current person's age to the list
    }

    return sum / list.length; // return the sum divided by the length of the list 

}
