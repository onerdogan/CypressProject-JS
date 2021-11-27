//Map
//bir array'den yararlanarak yeni bir array olusturma
var originalArray = [2, 4, 6, 8, 10];
function double(x) {
  return x * 2;
}
const newArray = originalArray.map(double);
console.log(newArray);

//const newArray1=originalArray.map(function double(x)){
//return x*2

//}

//filter

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//10dan buyuk

const filtreleme = numbers.filter((eachNum) => eachNum > 10);
console.log(filtreleme);

//ciftsayilar
let cift = numbers.filter((e) => e % 2 == 0);
console.log(cift);

let tek = numbers.filter((e) => e % 2 !== 0);
console.log(tek);
