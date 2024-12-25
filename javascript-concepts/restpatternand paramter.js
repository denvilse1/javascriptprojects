//Syntax similar to spread operator
let arr = [1, 2, 3, 5, 6, 7];
// using as spread operator: use case copy and merging
console.log(...arr);
let arr1 = [88, 99, ...arr];
console.log(arr1);

//Rest pattern and parmater
//? Called rest because it takes remaining elements and pack them into an array.
//?Mostly used on the left hand side of the assignment operator

let [x, y, ...others] = arr1;
console.log(others);
//rest paramter
