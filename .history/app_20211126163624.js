//OBJECT{}
//object data kaydetmek icin kullanilir
//{} ile olusturulur

var firstname = "Ali";
var lastname = "Can";
var age = 25;

var information = `${firstname} ${lastname} ${age}`;
console.log(information);

//prson object

var person = {
  firstname: "Ali",
  lastname: "Can",
  age: 25,
  isEmployed: true,
};
console.log(person);

console.log(typeof person); //object

//bilgileri cagirma

//1) .notation
console.log(person.firstname);
