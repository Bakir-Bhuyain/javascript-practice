/* unite convert inch to feet . mile to kilo */
//conversion 
// 1. inch to feet
//12 inch = 1 feet .
// function inchToFeet(inch){
//       const feet = inch/12;
//       return feet;
// }


// const manushHeight = inchToFeet(65);
// console.log(manushHeight);

/* 75 inch jodi bole tahole etake amra dkhabo with a purno sonkha */
// function inchToFeet (inch){
//       const feet = inch / 12;
//       const feetNumber = parseInt(feet);
//       const remaining = inch% 12;
//       const result = feetNumber + 'ft' + remaining + 'inch';
//       return  result;
// }
// let total = inchToFeet(80);
// console.log(total);

//inch to feet with the modulo(vagsesh) ;

function inchToFeet(inch){
      const inchToFeet = inch / 12;
      const purno = parseInt(inchToFeet);
      const remaining = purno % 12;
      const result = purno + 'feet' + remaining + 'inch';
      return result;
}
const total = inchToFeet(75);
console.log(total);

// mile to kilometer conversion

function mileToKilo (mile){
      const kilo = mile * 1.60934;
      return  kilo ;
}
const milesToKilo = mileToKilo(10);
console.log(milesToKilo);

//kilo to mile

function mileToKilo (kilo){
      const mile = kilo * 0.62137;
      return mile ;
}
const kiloToMiles = mileToKilo(12);
console.log(kiloToMiles);