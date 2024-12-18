//! SPREAD OPERATOR

const arr1 = [1, 2, 3];
const arr2 = [4, 5, ...arr1];
console.log(arr2);

// can be used to merge two arrays

const arr3 = [...arr1, ...arr2];
console.log(arr3);
