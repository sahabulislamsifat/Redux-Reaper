// Pure function
const add = (x, y) => {
  return x + y;
};

// console.log(add(5, 6));
// console.log(add(7, 6));
// console.log(add(8, 6));
// console.log(add(9, 6));
// console.log(add(0, 1));
// console.log(add(1, 1));
// console.log(add(2, 1));
// console.log(add(3, 1));

//Impure Function
const updateDate = () => {
  new Date();
};

const randomNum = (amount) => {
  return amount + Math.random();
};

console.log(randomNum(3));
console.log(randomNum(3));
console.log(randomNum(3));
console.log(randomNum(3));
