//if there is a duplicate array check it and remove it
const numbers = [12, 11, 12, 32, 32, 25, 78, 52, 11, 78];
function noDuplicate(array) {
  const unique = [];
  for (const number of array) {
    if (unique.includes(number) === false) {
      unique.push(number);
    }
  }
  return unique;
}
// const uniqueArray = noDuplicate(numbers);
// console.log(uniqueArray);

const birayaniKhor = ["abul", "sabul", "kabul", "abul", "mokbul", "kabul"];
function noDuplicate(array) {
  const unique = [];
  for (const item of array) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}
const uniqueArray = noDuplicate(birayaniKhor);
console.log(uniqueArray);
