// const coinFlip = Math.random() > 0.5 ? 0 : 1;
// console.log(coinFlip)

// // 콜백을 받는 함수
// function processData(data, callback) {
//   console.log("데이터 처리 중:", data);
//   callback(); // 전달받은 함수 실행
// }

// // 콜백 함수 정의
// function onComplete() {
//   console.log("처리 완료!");
// }

// // 사용
// processData("중요한 데이터", onComplete);
// // 출력: "데이터 처리 중: 중요한 데이터"
// // 출력: "처리 완료!"

// const now = new Date();
// console.log(now)

// 어떤 상태인지 확인 가능

// Promise.resolve에 setTimeout을 넣으면
// const promise1 = Promise.resolve(
//   setTimeout(() => {    // setTimeout이 실행되고
//     console.log("완료!");
//   }, 3000)
//   // setTimeout은 타이머ID(숫자)를 반환
// );
// const products = {
//   1: { name: "노트북", price: 1200000 },
//   2: { name: "스마트폰", price: 800000 },
// };

// function getProductData(productId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (products[productId]) {
//         resolve(products[productId]);
//       } else {
//         reject(new Error("상품을 찾을 수 없습니다."));
//       }
//     }, 1000);
//   });
// }

// //위 함수를 사용

// console.log("상품 정보를 요청합니다...");

// getProductData(1)
//   .then((product) => {
//     console.log("상품을 찾았습니다:", product);
//   })
//   .catch((error) => {
//     console.log("에러가 발생했습니다:", error.message);
//   });

// console.log("다른 작업을 진행할 수 있습니다.");

// // 계좌 데이터 (실제로는 데이터베이스에 저장되어 있을 정보)
// const bankAccounts = {
//   1001: { balance: 100000 },
//   1002: { balance: 200000 },
// };

// //혼자 해볼수 있는 문제

// // 1. 계좌 잔액 확인 함수
// function checkBalance(accountNumber) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (bankAccounts[accountNumber]) {
//         resolve(bankAccounts[accountNumber].balance);
//       } else {
//         reject(new Error("계좌를 확인할 수 없습니다."));
//       }
//     }, 1000);
//   });
// }

// // 2. 입금 함수
// function deposit(accountNumber, amount) {
//   return new Promise((resolve, reject) => {
//     checkBalance(accountNumber)
//       .then((account) => {
//         const newBalance = account + amount;
//         bankAccounts[accountNumber].balance = newBalance;
//         resolve(newBalance);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }

// // 3. 출금 함수
// function withdraw(accountNumber, amount) {
//   return new Promise((resolve, reject) => {
//     checkBalance(accountNumber)
//       .then((balance) => {
//         const newBalance = balance - amount;
//         bankAccounts[accountNumber].balance = newBalance;
//         resolve(newBalance);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }

// // 계좌 1001번으로 다음 작업들을 순차적으로 실행
// console.log("테스트를 시작합니다...");

// checkBalance("1001")
//   .then((balance) => {
//     console.log("1. 최초 잔액 확인:", balance);
//     return deposit("1001", 50000); // 5만원 입금
//   })
//   .then((newBalance) => {
//     console.log("2. 입금 후 잔액:", newBalance);
//     return withdraw("1001", 30000); // 3만원 출금
//   })
//   .then((finalBalance) => {
//     console.log("3. 출금 후 최종 잔액:", finalBalance);
//   })
//   .catch((error) => {
//     console.log("에러 발생:", error.message);
//   });

// 숫자를 받아서 2를 곱하는 함수
// function multiplyByTwo(number) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof number !== "number") {
//         reject(new Error("숫자를 입력해주세요"));
//         return;
//       }
//       console.log(`${number} × 2 = ${number * 2}`);
//       resolve(number * 2);
//     }, 1000);
//   });
// }

// // 숫자를 받아서 3을 더하는 함수
// function addThree(number) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof number !== "number") {
//         reject(new Error("숫자를 입력해주세요"));
//         return;
//       }
//       console.log(`${number} + 3 = ${number + 3}`);
//       resolve(number + 3);
//     }, 1000);
//   });
// }

// console.log("계산을 시작합니다...");

// multiplyByTwo(5) // 5에 2를 곱하고
//   .then((result) => {
//     return addThree(result); // 그 결과에 3을 더함
//   })
//   .then((finalResult) => {
//     console.log("최종 결과:", finalResult);
//   })
//   .catch((error) => {
//     console.log("에러 발생:", error.message);
//   });

// console.log("다른 작업을 할 수 있습니다.");

// function getProduct1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "노트북", price: 1200000 });
//     }, 1000); // 1초 소요
//   });
// }

// function getProduct2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ id: 2, name: "스마트폰", price: 800000 });
//     }, 2000); // 2초 소요
//   });
// }

// console.log("체이닝으로 처리 시작...");
// getProduct1()
//   .then((product1) => {
//     console.log("첫번째상품:", product1);
//     return getProduct2();
//   })
//   .then((product2) => {
//     console.log("두번째상품:", product2);
//   });

// console.log("Promise.all로 처리 시작...11");
// Promise.all([getProduct1(), getProduct2()])
//   .then(([product1, product2]) => {
// console.log("=============================================");
//     console.log("첫번째 상품2:", product1);
//     console.log("두번째 상품2:", product2);
//   })
//   .catch((error) => {
//     console.log("에러발생:", error.message);
//   });

// 상품 데이터
const products = {
  1: { name: "노트북", price: 1200000 },
  2: { name: "스마트폰", price: 800000 },
};

// 리뷰 데이터
const reviews = {
  1: [
    { user: "김철수", rating: 5, comment: "아주 좋아요!" },
    { user: "이영희", rating: 4, comment: "배송이 빨라요" },
  ],
  2: [{ user: "박지성", rating: 5, comment: "만족합니다" }],
};

// 재고 데이터
const stock = {
  1: 5,
  2: 3,
};

// 1. 상품 정보 가져오기
function getProductInfo(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products[productId];
      if (product) {
        resolve(product);
      } else {
        reject(new Error("상품을 찾을 수 없습니다."));
      }
    }, 1000);
  });
}

// 2. 리뷰 정보 가져오기
function getProductReviews(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const review = reviews[productId];
      if (review) {
        resolve(review);
      } else {
        reject(new Error("리뷰를 찾을 수 없습니다."));
      }
    }, 1500);
  });
}

// 3. 재고 확인하기
function getStockInfo(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const quantity = stock[productId];
      if (quantity !== undefined) {
        resolve(quantity);
      } else {
        reject(new Error("재고 정보를 찾을 수 없습니다."));
      }
    }, 800);
  });
}

// Promise.all([getProductInfo(1),getProductReviews(1),getStockInfo(1)])
// .then(([productInFo,productReviews,stockInfo])=>{
//   console.log("상품정보:",productInFo)
//   console.log("상품리뷰:",productReviews)
//   console.log("상품수량:",stockInfo)
// }).catch((error)=>{
//   console.log("에러발생:",error)
// })

//재사용하기 좋은 함수로 가공
function getAllProductDetails(productId) {
  return Promise.all([
    getProductInfo(productId),
    getProductReviews(productId),
    getStockInfo(productId),
  ]).then(([productInfo, productReviews, stockInfo]) => {
    return {
      productInfo,
      productReviews,
      stockInfo,
    };
  }).catch((error)=>{
    throw new Error('상품정보조회 실패:',error.message);
  })
}


getAllProductDetails(1).then(result=>{
  console.log("모든상품 정보:", result);
}).catch(error=>{
  console.log("에러:",error.message)
})

// 함수 안에서 console.log까지 처리
function showAllProductDetails(productId) {
  return Promise.all([
    getProductInfo(productId),
    getProductReviews(productId),
    getStockInfo(productId),
  ]).then(([productInfo, productReviews, stockInfo]) => {
    console.log("상품정보:", productInfo);
    console.log("상품리뷰:", productReviews);
    console.log("상품수량:", stockInfo);
  }).catch((error)=>{
    console.log("에러발생:", error);
  })
}

// 이제 그냥 함수만 호출하면 됨
showAllProductDetails(1);