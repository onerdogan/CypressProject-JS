//Nested Object

/*
 firstname: "Ali",   -string
  lastname: "Can",    
  age: 25,            -number
  isEmployed: true,   -boolean
  address:            -Object
      street:566 Ave
      city:New York
      state:NYC
      hobies:swimming, running, hunting     -Array


*/

const person = {
  firstname: "Ali",
  age: 25,
  isEmployed: true,
  address: {
    street: "566 Ave",
    city: "New York",
    state: "NYC",
  },
  hobies: ["swimming", "running", "hunting"],
};
console.log(person);
console.log(person.firstname);
console.log(person.address);
console.log(person.hobies);
console.log(person.hobies[0]);
