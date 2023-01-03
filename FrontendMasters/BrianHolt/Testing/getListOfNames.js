function getListOfNames(list) {
    // list is an array of objects that looks like this
    // { name: "Some Person", jobTitle: "Boss Person", age: 30 }
    // return a list of all the workers' names
    const names = []; // empty array to store names 
    for (let i = 0; i < list.length; i++) { // for loop to iterate through list of names
      const person = list[i]; // current person's name at index i 
      const name = person.name; 
      names.push(name); // adds name to the array
    }
    return names; // returns all names after the loop is complete
  }