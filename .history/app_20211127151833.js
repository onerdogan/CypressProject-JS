//10)concat(): arraylari birlestirir

var drinks = ["coke", "water", "fanta", "ayran"];
var kebaps = ["adana", "urfa", "ciger", "yaprak"];

var eatingList = drinks.concat(kebaps);
console.log(eatingList);

//11)reverse():
var numbers = [1, 2, 3, 4, 5, 6, -7, -8];
console.log("Orjinal List :" + numbers);
numbers.reverse();
console.log("reversed List :" + numbers);

//12) sort()
numbers.sort();
console.log(numbers);

//sort+reverse
numbers.reverse();
console.log(numbers);
