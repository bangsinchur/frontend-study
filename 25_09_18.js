// // 주문 상태를 확인하는 함수
// function checkOrderStatus(orderId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`주문 ${orderId}번이 접수되었습니다.`);
//     }, 2000);
//   });
// }

// // 주문을 처리하는 함수
// function processOrder(orderId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`주문 ${orderId}번이 처리중입니다.`);
//     }, 2000);
//   });
// }

// //async/await 으로 주문 처리 하기
// async function handleOrder(orderId) {
//   try {
//     console.log("주문을 시작합니다...");

//     //주문상태 확인
//     const status = await checkOrderStatus(orderId);
//     console.log(status);

//     //주문처리
//     const result = await processOrder(orderId);
//     console.log(result);

//     console.log("주문이 완료되었습니다.");
//   } catch (error) {
//     console.log("에러발생", error.message);
//   }
// }

// handleOrder(123)

// // 사용자 데이터
// const users = {
//   1: { name: "김철수", grade: "VIP" },
//   2: { name: "이영희", grade: "일반" },
// };
// // 주문 데이터
// const orders = {
//   1: [
//     { id: 1, item: "노트북", price: 2000000 },
//     { id: 2, item: "마우스", price: 50000 },
//   ],
//   2: [{ id: 3, item: "키보드", price: 150000 }],
// };

// //사용자 정보 가져오기
// function getUserInfo(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = users[userId];
//       if (user) {
//         resolve(user);
//       } else {
//         reject(new Error("사용자를 찾을 수 없습니다."));
//       }
//     }, 2000);
//   });
// }

// //주문내역 가져오기
// function getUserOrders(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const userOrders = orders[userId];
//       if (userOrders) {
//         resolve(userOrders);
//       } else {
//         reject(new Error("주문 내역이 없습니다."));
//       }
//     },2000);
//   });
// }

// // async/await으로 사용자 정보와 주문 내역 가져오기
// async function getUserDetails(userId) {
//   try {
//     console.log(`${userId}번 사용자의 정보를 조회합니다...`);
//     //사용자 정보 가져오기
//     const user = await getUserInfo(userId);
//     console.log("사용자 정보:", user);
//     //사용자의 주문내역 가종기
//     const userOrders = await getUserOrders(userId);
//     //주문 총액 계산하기
//     const total = userOrders.reduce((sum, order) => sum + order.price, 0);

//     console.log("주문내역", userOrders);
//     console.log("총 주문금액:", total);

//     //vip 회원 할인 적용하기
//     if (user.grade === VIP) {
//       const discount = total * 0.1;
//       console.log("VIP 할인 금액:", discount);
//       console.log("최정 결제 금액:", total - discount);
//     }
//   } catch (error) {
//     console.log("에러발생:", error.message);
//   }
// }

// console.log("=== VIP 회원 조회 ===");
// getUserDetails(1);

// // 3초 후에 일반 회원 조회
// setTimeout(() => {
//     console.log("\n=== 일반 회원 조회 ===");
//     getUserDetails(2);
// }, 6000);

// // 6초 후에 없는 회원 조회
// setTimeout(() => {
//     console.log("\n=== 없는 회원 조회 ===");
//     getUserDetails(3);
// }, 12000);

// 상품 데이터
// const products = {
//   1: { name: "노트북", stock: 5 },
//   2: { name: "마우스", stock: 0 },
//   3: { name: "키보드", stock: -1 }, // 잘못된 데이터
// };

// //재고 확인 함수
// function checkStock(productId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const product = products[productId];

//       if (!product) {
//         reject(new Error("상품이 존재하지 않습니다."));
//         return;
//       }
//       if (product.stock < 0) {
//         reject(new Error("재고 데이터가 잘못되었습니다."));
//         return;
//       }
//       resolve(product);
//     }, 1000);
//   });
// }

// //재고감소 함수
// function decreaseStock(productId,amount){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const product = products[productId]
//             if(amount<=0){
//                 reject(new Error("수량은 1개 이상이어야 합니다."))
//                 return;
//             }
//             if( product.stock <amount){
//                 reject(new Error("재고가 부족합니다."))
//                 return;
//             }
//             product.stock -= amount;
//             resolve(`${product.name} 재고가 ${amount}개 감소했습니다. 남은 재고: ${product.stock}개`);
//         }, 1000);
//     })
// }

// // async/await으로 재고 관리하기
// async function processOrder(productId, amount){
//     try{
//         console.log(`주문 처리 시작: 상품 ${productId}번, ${amount}개`);
//         //재고확인
//         const product = await checkStock(productId)
//         console.log(`재고 확인 완료: ${product.name}, ${product.stock}개 있음`);
//         //재고 감소
//         const result = await decreaseStock(productId,amount)
//         console.log(result)
//         return "주문이 성공적으로 처리 되었습니다."

//     } catch (error){
//           console.log("주문 처리 중 오류 발생:", error.message);
//         return "주문 처리에 실패했습니다.";
//     }
// }

// // 여러 상황 테스트하기
// async function runTests() {
//     // 테스트 1: 정상 주문
//     console.log("\n=== 테스트 1: 정상 주문 ===");
//     const result1 = await processOrder(1, 2);
//     console.log("결과:", result1);

//     // 테스트 2: 재고 부족
//     console.log("\n=== 테스트 2: 재고 부족 ===");
//     const result2 = await processOrder(1, 10);
//     console.log("결과:", result2);

//     // 테스트 3: 존재하지 않는 상품
//     console.log("\n=== 테스트 3: 존재하지 않는 상품 ===");
//     const result3 = await processOrder(4, 1);
//     console.log("결과:", result3);

//     // 테스트 4: 잘못된 재고 데이터
//     console.log("\n=== 테스트 4: 잘못된 재고 데이터 ===");
//     const result4 = await processOrder(3, 1);
//     console.log("결과:", result4);
// }

// // 테스트 실행
// runTests();

// processOrder(1, 2);
// processOrder(1, 10);
// processOrder(4, 1);

// 기존 데이터
const products = {
  1: { name: "노트북", price: 1000000, stock: 10 },
  2: { name: "마우스", price: 20000, stock: 0 },
};

const reviews = {
  1: [
    { rating: 5, comment: "아주 좋아요" },
    { rating: 4, comment: "괜찮아요" },
  ],
  2: [{ rating: 3, comment: "평범해요" }],
};

// 기본 제공되는 함수들
function getProduct(productId) {
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

function getReviews(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const reviewList = reviews[productId];
      if (reviewList) {
        resolve(reviewList);
      } else {
        reject(new Error("리뷰를 찾을 수 없습니다."));
      }
    }, 1000);
  });
}

async function getProdcutDetails(productId) {
  try {
    const [product, review] =await Promise.all([
      getProduct(productId),
      getReviews(productId),
    ]);
    if (product.stock <= 0) {
      console.log("상품재고가 없습니다.");
      return;
    }

    console.log("상품 상세 내용:", product);
    console.log("제품 리뷰:", review);
  } catch (error) {
    console.log("에러발생:", error.message);
  }
}

async function getMultipleProducts(productIds) {
  try {
    const productsDetails = await Promise.all(
      productIds.map(async (id) => {
        const product = await getProduct(id);
        const review = await getReviews(id);
        return {
          ...product,
          ...review,
        };
      })
    );
    console.log("제품의 상세내용:", productsDetails);
  } catch (error) {
    console.log("상품 조회 실패:", error.message);
  }
}
