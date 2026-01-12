//Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

//Formula (2°C × 9/5) + 32

function fahrenheit(celsius) {
  let temp = 0;
  temp = (celsius * 9) / 5 + 32;
  return temp;
}
// const totalTemp = fahrenheit(2);
// console.log(totalTemp);

/* Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.
sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2

//---pt-2---

sample-input
numbers = [5,6,11,12,98, 5]
find: 25
output: 0

 */
const numbers = [5, 6, 11, 12, 98, 5];
function repeatedNumber(array, target) {
  let count = 0;
  for (const number of array) {
    if (number === target) {
      count++;
    }
  }
  return count;
}
// const result = repeatedNumber(numbers, 25);
// console.log("Total count:", result);

// Task-3:
// Write a function to count the number of vowels in a string.

//trace table

//no1: ekta fixed array declare korte hbe jekhane vowels gula thakbe
//no2: ekta function likhte hbe
//no3: 2 ta parameter nibo karon number count korte hbe vowels er sapekkhe
//no4:loop chalate hbe given input er upor koto gula vowels ache check deyar jono and khali ekta variable e jinishta ek ek kore rakhbo
//no5 : return kore dibo

function findVowels(sentence) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const vowelsList of sentence) {
    if (vowels.includes(vowelsList)) {
      count++;
    }
  }
  return count;
}
// const totalVowels = findVowels("i am learning web development");
// console.log(totalVowels);

/* Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming */
//Trace Table
//no 1 : ekta function nibo
//no 2 : ekta const input thakbe
//no 3 : 1ta  parameter nibo.
//no 4 : split use kore loop through korte hobe to check the longest word
//no 5 : check korte hobe condition er maddhome length use kore konta boro
//no 5 : check korar pore sobceye boro ta khali ekta variable e dekhabe
//no 6 : then eta means khali variable ta return kore dibo

function findLongestWord(sentence) {
  const words = sentence.split(' ');
  let longestWords = "";
  for (const word of words) {
    if (word.length > longestWords.length) {
      longestWords = word;
    }
  }
  return longestWords;
}
// const totalword = findLongestWord(
//   "I am learning Programming to become a programmer"
// );
// console.log(totalword);


// Generate a random number between 10 to 20.
console.log(Math.random()* 10 + 10);