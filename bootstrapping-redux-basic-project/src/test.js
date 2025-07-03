import { produce } from "immer";

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

// console.log(randomNum(3));
// console.log(randomNum(3));
// console.log(randomNum(3));
// console.log(randomNum(3));

//* Mutation

const employee = {
  name: "Sifat",
  age: 22,
  country: "Bangladesh",
  city: "Dhaka",
};

// const employee2 = employee;
// employee2.name = "Sajul";

// const employee2 = {
//   ...employee,
//   name: "Sajul",
// };
// const employee2 = {
//   ...employee,
//   name: "Sajul",
//   city: { city: "RAJSHAHI" },
// };
const employee2 = produce(employee, (draft) => {
  (draft.name = "Ayan"), (draft.city = "Rangpur");
});

// employee2.city = "CTG";

console.log(employee);
console.log(employee2);
