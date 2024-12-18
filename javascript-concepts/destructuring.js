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
  name: ["d", "k"],
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

//! let { name1 = nayanamf, phone1 = phe } = personal2;
//! console.log(nayanam);
//! console.log(phone1);

//To rename the variable you have to use x:name of the variable in array destructuring
const { name1: Aslinaam, phe: phoneNum } = personal2;
console.log(Aslinaam);
console.log(phoneNum);

//how to destructure nested object

let personal3 = {
  name12: ["Elon", "musk"],
  phe1: "91924646",
};

// const {
//   name12: { firstname, lastname },
//   phe1: phone22,
// } = personal3;
// console.log(firstname);
// console.log(lastname);
// console.log(phone22);
const [firstname, lastname] = personal3.name12;
console.log(firstname);
console.log(lastname);

//! USING DEFAULT VALUES
const obj = { a1: 1, b1: 2, c1: 3 };

const { a1, b1, c1, d = 456 } = obj;
console.log(d, a1);
