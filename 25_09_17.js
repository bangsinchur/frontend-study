// function slowResponse() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("데이터 로딩 완료");
//     }, 5000);
//   });
// }
// function fastResponse(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("시간 초과!"));
//     }, time);
//   });
// }

// Promise.race([slowResponse(), fastResponse(3000)])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("실패:", error.message);
//   });

//   // 두 개의 간단한 Promise 함수
// function orderCoffee() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("커피가 완성되었습니다!");
//     }, 3000);  // 3초 소요
//   });
// }

// function orderTea() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("차가 완성되었습니다!");
//     }, 2000);  // 2초 소요
//   });
// }

// // Promise.race 사용하기
// console.log("음료 주문을 시작합니다...");

// Promise.race([orderCoffee(), orderTea()])
//   .then(result => {
//     console.log(result);  // "차가 완성되었습니다!" 가 먼저 출력됨
//     console.log("첫 번째 완성된 음료가 나왔습니다!");
//   });

// 여러 검색 엔진에서 검색 결과를 가져오는 상황을 가정해보겠습니다
// function timeLimit() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("검색 시간이 초과되었습니다."));
//     }, 2600); // 2.5초 제한
//   });
// }
// function searchNaver(keyword) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         engine: "네이버",
//         result: `네이버에서 '${keyword}' 검색 결과입니다.`,
//       });
//     }, 2600); // 2초 소요
//   });
// }

// function searchDaum(keyword) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         engine: "다음",
//         result: `다음에서 '${keyword}' 검색 결과입니다.`,
//       });
//     }, 2600); // 1.5초 소요
//   });
// }

// function searchGoogle(keyword) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         engine: "구글",
//         result: `구글에서 '${keyword}' 검색 결과입니다.`,
//       });
//     }, 3000); // 3초 소요
//   });
// }
// // 시간 제한 함수

// const searchKeyword = (keyword) => {
//   Promise.race([
//     timeLimit(),
//     searchNaver(keyword),
//     searchDaum(keyword),
//     searchGoogle(keyword),
//   ])
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log("오류:", error.message);
//     });
// };

// searchKeyword("바보");


// 데이터 불러오는 함수
async function getData() {
    console.log("1. 데이터 요청 시작");
    const data = await fetch('/api/data');  // 여기서 이 함수는 기다림
    console.log("4. 데이터 받음");
    return data;
}

// 실행
console.log("시작");
getData().then(result=>{
    console.log(result)
})
console.log("2. 다음 작업 실행");
console.log("3. 또 다른 작업 실행");
