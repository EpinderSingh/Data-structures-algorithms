// write a function which takes in a string and return counts of each character in the string.

const countChar = (string) => {
  //male object to return at end
  let result = {};
  //loop over string, for each character...
  // for (var i = 0; i < string.length; i++)
  for (let char of string) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
};

console.log(countChar('Hello Epinder'));
