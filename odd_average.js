//calculate the average of the odd numbers in an array

function averageOfOdd (numbers){
      const odds = [];
      for (const number of numbers){
            if(number %2 ===1 ){
             odds.push(number);
            }    
      }
      let sum = 0;
      for (const number of odds){
            sum = sum +number;
      }
      const count = odds.length;
      const avg = sum/count;
      return avg;
}
const numbers = [12, 22, 23 , 25, 45, 75 , 98, 65, 22, 26];
const avg = averageOfOdd(numbers);
console.log(avg);