// function getAgeMessage(name, birthYear){
//     let currentYear = 2025;
//     let age = currentYear - birthYear
//     return `${name}님은 ${birthYear}년 생이며, 올해 나이는 ${age}살 입니다.`
// }

// let message = getAgeMessage('신철', 1991);
// console.log(message)

// function totalPay(price, quantity){
//     let payment = price * quantity
//     return `총액은 ${payment}원 입니다.`
// }

// let pay = totalPay(2000, 6)
// console.log(pay)

// function add1(a,b) {
//     return a+b;
// }

// const add2 = function (a,b) {
//     return a + b;
// }

// const add3 = (a,b) => a+b;

// console.log(add1(2,3))
// console.log(add2(4,5))
// console.log(add3(6,7))

// const favoritColor = (name2, color) => `${name2}님은 ${color}을 좋아합니다.`

// favoritColor('신철', '파란색')

// function checkAdult(age) {
//     if (age >= 20){
//         return '성인입니다.'
//     } else{
//         return '미성년자입니다.'
//     }

// }

// let result = checkAdult(19)
// console.log(result)

// const checkGrade = (score)=> {
//     if(score >= 90){
//         return 'A등급'
//     } else if (score >= 80){
//         return 'B등급'
//     } else {
//         return 'C등급'
//     }
// }

// let resultgrade = checkGrade(90)
// console.log(resultgrade)

// function checkAccess(age, isMember){
//     if(age>= 20 && isMember){
//         return "성인회원 접근 허용"
//     } else {
//         return "접근 불가";
//     }
// }

// let result2 = checkAccess(25 , true)
// console.log(result2)

// const checkAccess2 = (age2, isMember2) => {
//     if (age2 >= 20 ) {
//         if( isMember2){
//             return "성인 회원"
//         } else { return "성인 비회원"}
//     } else {return "미성년자"}
// }

// for (let i =1 ; i<= 10 ; i++){
//     if(i%2 === 0){
//         console.log( `짝수 입니다.:${i}`)
//     }
// }

// let i = 1

// while( i <= 10){
//     if(i%2 === 1){
//     console.log(`홀수 입니다.:${i}`)
//     i++;
// }else if(i%2 === 0){
// i++
// }}

// let animals = ["강아지", "고양이", "토끼", "햄스터", "거북이"];

// animals.forEach(function(animal){
//     console.log(animal)
// })

// let total = 0;
// let prices = [100, 200, 300];

// const result = prices.forEach(function (price) {
//   total = total + price; // 또는 total += price
// });

// console.log("total1", total); // ✅ 600
// console.log("result", result);

// const result2 = prices.map(function (price) {
//   total = total + price; // 또는 total += price
//   return total
// });

// console.log("total2", total);
// console.log("result2", result2);

// let numbers = [10, 20, 30];

// const result = numbers.map((number) => number + 5);

// console.log(result);

// let scores = [45, 82, 77, 59, 90];

// const result = scores.map((score) => {
//   if (score >= 60) {
//     return "합격";
//   } else {
//     return "불합격";
//   }
// });

// console.log(result)

let products = [
  { name: "노트북", price: 1000 },
  { name: "모니터", price: 800 },
  { name: "키보드", price: 200 }
];

// 여기에 map()을 사용해서 가격에 10%를 더한 새 배열을 만들어보세요

const result = products.map(product => {
    return {
        name: product.name,
        price: product.price*1.1
    }
})

console.log(result)