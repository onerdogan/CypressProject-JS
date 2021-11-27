//Map
var originalArray = [2, 4, 6, 8, 10];
function double(x) {
  return x * 2;
}
const newArray = originalArray.map(double);
console.log(newArray);
