//fonksiyonlar

function sum() {
  var num1 = 10;
  var num2 = 20;
  var num3 = 30;
  var total = num1 + num2 + num3;
  return total;
}

console.log(sum());

function cikarma() {
  var num1 = 50;
  var num2 = 20;
  var cikarma = num1 - num2;
  return cikarma;
}

console.log(cikarma());

//Fonksiyon tanimlama

function fonksiyonImi(parametre1, parametre2) {
  return donusDegeri;
}
//1)Parametresiz Fonksion
function greet() {
  console.log("Hi !!");
}
greet();
//2) Parametreli fonksiyon

function greetPeople(name) {
  console.log("Hi " + name);
}
greetPeople("Ali");
