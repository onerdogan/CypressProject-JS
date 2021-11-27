//LOOPS
//1= for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//2)for of loop
const iterable = [0, 1, 2, 3, 4, 5];
for (let a of iterable) {
  console.log(a);
}

const todo = [
  {
    id: 1,
    task: "meeting",
    isComplete: true,
  },
  {
    id: 2,
    task: "shopping",
    isComplete: true,
  },
  {
    id: 3,
    task: "doctor",
    isComplete: true,
  },
];
for (let i = 0; i < todo.length; i++) {
  console.log(todo[i].id);
  console.log(todo[i].task);
  console.log(todo[i].isComplete);
}
for (let a of todo) {
  console.log(a);
}
//3) foreach
