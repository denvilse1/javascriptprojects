//! SPREAD OPERATOR

const arr1 = [1, 2, 3];
const arr2 = [4, 5, ...arr1];
console.log(arr2);

// can be used to merge two arrays

const arr3 = [...arr1, ...arr2];
console.log(arr3);

// spread operator works almost all the iterables and from es 2018 it started to work on objects as well

let name = "Elon Musk";
console.log(...name);

// const objectone = {
//   name1: "Rohan",
//   lastname: "ladka",
// };
// const objectspread = { ...objectone };
// console.log(...objectspread);

const person = { name: "Alice", age: 25 };

// Creating a shallow copy of the person object
const personCopy = { ...person };

console.log(personCopy);

const objectone = {
  name1: "Rohan",
  lastname: "ladka",
};
// console.log(...objectone);
const objectspread = { ...objectone };
console.log(objectspread);
