const counter = {
  count: 0,
  //   increment() {
  increment(newCount) {
    this.count += newCount;
    console.log(this.count);
  },
};

// counter.increment(1);
// counter.increment(2);
// counter.increment(3);
// counter.increment(10);
// counter.increment(25);
// counter.increment(25);

const counterFunction = (newCount) => {
  let count = 0;
  return (count += newCount);
};

console.log(counterFunction(4));
console.log(counterFunction(5));
console.log(counterFunction(6));
