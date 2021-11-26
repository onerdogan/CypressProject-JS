//Anonymous fonksiyonlar
//function(a,b,c,){
// return a+b+c
//}

var result = function (a, b, c) {
  return a + b + c;
};
console.log(result(1, 2, 3));

let info = function (firstname, lastname, age) {
  console.log(firstname + " " + lastname + " " + age);
};
info("ozgur", "kus", 25);

//ARROW functions
function sum(a) {
  return a + 100;
}
console.log(sum(10));

//1)function ve ismini sileriz
//parametre ile body arasini  => isareti konulur
//return type ve (){}ler silinir. TEK parametrede

var arrw = (a) => a + 111;
console.log(arrw(10)); //121

function sum1(a, b) {
  return a + b + 100;
}
console.log(sum1(2, 3)); //105

var arrw1 = (a, b) => a + b + 100;
console.log(arrw1(4, 5)); //109

//Parametresiz fonksiyonlarda ARROW
//ornek--
var a = 5,
  b = 6;
function sum3() {
  return a + b + 100;
}

console.log(sum3());
//arrowlu
var arrw2 = () => a + b + 100;
console.log(arrw2());

//ornek--
a = 6;
b = 7;
var newSum = function () {
  return a + b + 100;
};
console.log(newSum(a, b));
//arrowlu Anonymous
var arrw3 = (a, b) => a + b + 100;
console.log(arrw3(8, 8));

//ornek-prizma
var prizma = function (l, w, h) {
  return l * w * h;
};
console.log(prizma(2, 3, 4));

var prisma2 = (l, w, h) => l * w * h;
console.log(prisma2(5, 6, 7));
