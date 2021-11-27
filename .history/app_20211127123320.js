//ARRAY'lere data ekleme ve silme

var friendList = ["can", "ece", "ali", "naz"];
console.log(friendList);
console.log(typeof friendList);

//1) push() sona data ekler
friendList.push("ozgur");
console.log(friendList);

//2)unshift() arayin basina data ekler
friendList.unshift("onder");
console.log(friendList);

//3) pop() son datayi siler
friendList.pop();
console.log(friendList);
