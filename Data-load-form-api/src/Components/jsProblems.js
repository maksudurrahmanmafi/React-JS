const numbers = [12, 7, 5, 18, 22, 31, 40];
const even = numbers.filter((even) => even % 2 === 0);
// console.log(even);
const students = [
  { id: 1, name: "Mafi", age: 20 },
  { id: 2, name: "Hasan", age: 21 },
  { id: 3, name: "Sakib", age: 19 },
  { id: 4, name: "Rafi", age: 22 },
];

const newStudent = students.map((name) => name.name);
// console.log(newStudent);

const students1 = [
  { id: 1, name: "Mafi", age: 20 },
  { id: 2, name: "Hasan", age: 21 },
  { id: 3, name: "Sakib", age: 19 },
  { id: 4, name: "Rafi", age: 22 },
];
const age = students1.filter((age) => age.age >= 20);
// console.log(age);

const students2 = [
  { id: 1, name: "Mafi", age: 20 },
  { id: 2, name: "Hasan", age: 21 },
  { id: 3, name: "Sakib", age: 19 },
  { id: 4, name: "Rafi", age: 22 },
];
const newId = students2.find((studentId) => studentId.id == 3);
// console.log(newId);

const products = [
  { id: 1, name: "Mouse", price: 800 },
  { id: 2, name: "Keyboard", price: 1500 },
  { id: 3, name: "Monitor", price: 12000 },
  { id: 4, name: "Headphone", price: 2500 },
];
const result = products.reduce((acc, cur) => {
  return acc + cur.price;
}, 0);
// console.log(result);
const products2 = [
  { id: 1, name: "Mouse", price: 800 },
  { id: 2, name: "Keyboard", price: 1500 },
  { id: 3, name: "Monitor", price: 12000 },
  { id: 4, name: "Headphone", price: 2500 },
];

const result2 = products2.reduce((acc, cur) => {
  if (acc.price > cur.price) return acc;
  return cur;
}, products2[0]);
console.log(result2);
