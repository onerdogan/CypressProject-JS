//Fonksiyonlar

//1. Parametresiz fonksiyon

function greed() {
  console.log("Hi!!");
}
greed();

//2. Parametreli fonksiyon

function greedPeople(namePeople) {
  console.log("Hi " + namePeople);
}
greedPeople("Ali"); //Hi Ali
greedPeople(true); //Hi true
greedPeople(20); //Hi 20
greedPeople(null); //Hi null
greedPeople("ali", "ece"); //Hi ali

//3. 2 parametreli fonksiyon

function adYas(name, yas) {
  console.log(name + yas);
}
adYas("can", 45);

//fu
function information(location, price, rating) {
  console.log(location + ", " + price + ", " + rating);
}
information("sarigerme", 7000, "7*");
