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

function sum(a, b) {
  return a + b + 100;
}
console.log(sum(2, 3)); //105

var arrw1 = (a, b) => a + b + 100;
console.log(arrw1(4, 5)); //109

//Parametresiz fonksiyonlarda ARROW

var a = 5,
  b = 6;
function sum() {
  returna + b + 100;
}

console.log(sum());

var arrw2 = () => a + b + 100;
