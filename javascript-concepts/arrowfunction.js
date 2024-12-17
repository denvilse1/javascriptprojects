//Syntax of arrow function
const greet = (name) => {
  console.log(`hello ${name} what's up guys`);
};

// greet("raju");

//basic Arrow function
// two functions takes two parameter a and b and return their product

const multiply = (a, b) => {
  console.log(a * b);
};

multiply(4, 3);

//Single Expression Arrow function
const square = (a) => a * a;
console.log(square(4));

const arrow = () => {
  console.log("hellow world ");
};

arrow();
