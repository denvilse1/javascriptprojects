// Array destructuring is an ES6 feature
// it is a way of unpacking the values or unpacking the complex data structure.
const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z);

const arrone = ["abc", "def", "ghi"];
const [a, b, c] = arrone;
console.log(a);
console.log(b);
console.log(c);

// object destructuring is done using the curly braces
let personal = {
  name: ["dinesh", "khatana"],
  ph: "9192bakiteri",
};
const { name, phone } = personal;
console.log(name);
//if you use the same property name as in the object then only you can assign the value to

console.log(phone);
// other wise it will show undefined
// to use the other name assign the property name, while destructuring
// console.log(phone);
let personal2 = {
  name1: ["Elon", "musk"],
  phe: "91924646",
};

let { name1 = nayanamf, phone1 = phe } = personal2;
console.log(nayanam);
console.log(phone1);
