const countUpAndDown = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  console.log('At the top! now Going Down...');

  for (j = n - 1; j >= 0; j--) {
    console.log(j);
  }
};

console.log(countUpAndDown(10));
