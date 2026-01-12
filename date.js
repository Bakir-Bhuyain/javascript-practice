const today = new Date();
const date = new Date('2062-10-18')
console.log(date.getMonth());
console.log(date.getDay());
const specificDate = new Date(2091, 0, 26);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate.toLocaleString('en-GB'));

//1970 saler ekhn porjonto ekhn porjonto koto second hoise ejonne eta kora 
//etake bole -unix epocs