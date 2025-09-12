// // let users = [
// //   { name: "신철", age: 32 },
// //   { name: "민수", age: 28 },
// //   { name: "지혜", age: 35 },
// // ];

// // const ageFilter = users.filter((user) => {
// //   return user.age >= 30;
// // });

// // console.log(ageFilter);

// // let products = [
// //   { name: "노트북", price: 1000 },
// //   { name: "모니터", price: 800 },
// //   { name: "키보드", price: 200 },
// // ];

// // let expensiveNames = products.filter(product=> product.price>= 500).map(product=> product.name);

// // console.log(expensiveNames)

// // const ageFilter = users.filter(user => user.age >= 30).map(user=> {
// //     return {
// //         greeting: `안녕하세요, ${user.name}님`,
// //         ageGroup: `30대`
// //     }
// // });

// // console.log(ageFilter)

// // let users = [
// //   { name: "신철", age: 32 },
// //   { name: "민수", age: 28 },
// //   { name: "지혜", age: 35 },
// //   { name: "영수", age: 19 },
// // ];

// // const ageFilter = users.filter((user) => {
// //   return user.age >= 20;
// // }).map(user => {
// //     if(user.age >= 30){
// //         return `${user.name}님은 30대입니다`;
// //     } else if(user.age >=20){
// //         return `${user.name}님은 20대입니다`
// //     }
// // });

// // console.log(ageFilter)
// let users = [
//   { name: "신철", age: 32 },
//   { name: "민수", age: 17 },
//   { name: "지혜", age: 68 },
// ];

// let currentHour = 10; // 현재 시간 (0~23)

// const greeting = users.map((user) => {

//     if (currentHour >= 5 && currentHour <= 11) {
//       greet = "좋은 아침 입니다.";
//     } else if (currentHour >= 12 && currentHour <= 17) {
//       greet ="좋은 오후 입니다.";
//     } else if (currentHour >= 18 && currentHour <= 22) {
//       greet = "좋은 저녁 입니다.";
//     } else {
//      greet = "편안한 밤 되세요!";
//     }

//   if (user.age >= 65) {
//     grade = `안녕하세요, ${user.name}님 (실버회원). ${greet} `;
//   } else if (user.age >= 20) {
//     grade = `안녕하세요, ${user.name}님 (일반회원). ${greet} `;
//   } else {
//     grade = `안녕하세요, ${user.name}님 (청소년 회원). ${greet} `;
//   }

//   return grade
// });

// console.log(greeting);

// 테스트 케이스(입력만 제공; 출력은 직접 구현한 함수로 확인하세요)
const tests = [
  // 평일(주말 아님)
  { hour: 8, isWeekend: false, note: "평일 오픈 전" },
  { hour: 9, isWeekend: false, note: "평일 오픈 경계" },
  { hour: 12, isWeekend: false, note: "평일 일반 시간" },
  { hour: 18, isWeekend: false, note: "평일 마감 경계" },
  { hour: 19, isWeekend: false, note: "평일 마감 후" },

  // 주말
  { hour: 9, isWeekend: true, note: "주말 오픈 전" },
  { hour: 10, isWeekend: true, note: "주말 오픈 경계" },
  { hour: 13, isWeekend: true, note: "주말 일반 시간" },
  { hour: 16, isWeekend: true, note: "주말 마감 경계" },
  { hour: 17, isWeekend: true, note: "주말 마감 후" },
];

function getStoreStatus(hour, isWeekend) {
  if (isWeekend) {
    if (hour >= 9 && hour <= 18) {
      return "OPEN";
    } else {
      return "CLOSED";
    }
  } else {
    if (hour >= 10 && hour <= 16) {
      return "OPEN";
    } else {
      return "CLOSED";
    }
  }
}

tests.forEach((t) => {
  const result = getStoreStatus(t.hour, t.isWeekend); // TODO: 본인이 구현한 함수 호출
  console.log(`[hour=${t.hour}, weekend=${t.isWeekend}] ${t.note} → ${result}`);
});
