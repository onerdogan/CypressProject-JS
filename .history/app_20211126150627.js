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
//return type ve {}ler silinir

var arrw = (a) => a + 100;
console.log(sum(10));
