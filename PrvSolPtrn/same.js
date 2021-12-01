// Write a function called same, which accepts two arrays. The function should retirn true if every value in the array has it's corresponding value squared in the second array. The frequenct of value must be the same.

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      console.log(correctIndex);
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
};

console.log(same([1, 2, 3, 4], [1, 9, 4, 4]));
