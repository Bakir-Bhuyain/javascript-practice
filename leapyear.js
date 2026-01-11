//option 1: Basic system to make check the is the year is leap year or not:

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
const leapYear = isLeapYear(2052);
// console.log(leapYear);

//option 2: for checking is the  year is leap year or not:
/* if the year is divisible by 4 and also divisible by 100 then it is also a leap year */

function isLeapYear(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
const leapyear = isLeapYear(2400);
// console.log(leapyear);

//option 3 :
/* if year is divisible by 400 then it is a leap year */

function isLeapYear(year) {
  if (year % 400 === 0 && year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
// const leap = isLeapYear(2055);
// console.log(leap);

//combine

function isLeapYear ( year ){
      if ( (year % 400===0 && year % 100 !==0) || year % 100===0){
            return true;
      }else{
            return false;
      }
}
const leap = isLeapYear(2000);
console.log(leap);