//if there is a duplicate array check it and remove it
// const numbers = [12, 11, 12, 32, 32, 25, 78, 52, 11, 78];
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
// const uniqueArray = noDuplicate(birayaniKhor);
// console.log(uniqueArray);

/**Scenario: একটা কমেন্টের লিস্ট আছে। সেখানে কিছু খারাপ কথা ("bad") আছে। তোমাকে সেগুলো বাদ দিয়ে একটা Clean List বানাতে হবে।*/
const comments = ["good", "bad", "nice", "bad", "excellent"];
function filtering(bad) {
  const newWords = [];
  for (const item of bad) {
    if (newWords.includes(item) === false) {
      newWords.push(item);
    }
  }
  return newWords;
}
// const newArray = filtering(comments);
// console.log(newArray)

const numbers = [10, 55, 2, 90, 40];
let biggest = numbers[0];

function findBigNumber(numberList) {
  for (const num of numberList) {
    if (num > biggest) {
      biggest = num;
    }
  }
  return biggest;
}

const result = findBigNumber(numbers);
console.log(result);
