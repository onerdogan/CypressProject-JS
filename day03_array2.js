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

//4 shift()arraydaki ilk datayi siler
friendList.shift();
console.log(friendList);

var ages = [10, 20, 30, 40, 50, 30, 60, 30];
console.log(ages);

//5) indexOf(item,from)
console.log(ages.indexOf(20));
console.log(ages.indexOf(50)); //4

console.log(ages.indexOf(30, 2)); //5
//30 rakami 2. defa kacinci indexte var

//return-1 eslesme yok
console.log(ages.indexOf(20, 3));
console.log(ages.indexOf(80));

//6) lastIndexOf()
console.log(ages.lastIndexOf(30));

//7) includes(item, starting index)
console.log(ages.includes(60));
console.log(ages.includes(70));

console.log(ages.includes(40, 3));

const isExist = ages.includes(40, 3);
console.log(isExist);
