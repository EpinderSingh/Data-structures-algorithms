// Sum numbers with for loop

const add = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total = total + i;
  }
  return total;
};

// Fast way
const nFast = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(add(5));
console.log(nFast(5));
