// // function divideNumbers(a, b) {
// //   try {
// //     if (b === 0) {
// //       throw new Error("0으로 나눌 수 없습니다.");
// //     }
// //     const result = a / b;
// //     console.log("계산 결과:", result);
// //     return result;
// //   } catch (error) {
// //     console.log("에러발생:", error.message);
// //     return null; // 에러 발생시 null 반환.
// //   }
// // }

// // divideNumbers(10, 2);
// // divideNumbers(10, 0);
// // divideNumbers(null);

// // function parseJsonString(jsonText) {
// //   try {
// //     const result = JSON.parse(jsonText);
// //     console.log("파싱성공", result);
// //     return result;
// //   } catch (error) {
// //     console.log("JSON 파싱 실패:", error.message);
// //     return {};
// //   }
// // }

// // parseJsonString('{"name": "철수", "age": 25}'); // 성공
// // parseJsonString('{"name": "철수", age: 25}'); // 실패 (따옴표 누락)

// // function processData(data) {
// //   console.log("데이터 처리 시작");

// //   try {
// //     if (!data) {
// //       throw new Error("데이터가 없습니다");
// //     }
// //     console.log("데이터 처리 중:", data);
// //     return "처리 완료";
// //   } catch (error) {
// //     console.log("처리 실패:", error.message);
// //     return "처리 실패";
// //   } finally {
// //     console.log("처리 종료 (정리 작업)"); // 항상 실행됨
// //   }
// // }

// // // 테스트
// // processData("중요한 데이터"); // 성공 케이스
// // processData(null); // 실패 케이스

// //입력검증 합수
// function calculateAge(birthYear, currentYear) {
//   try {
//     if (typeof birthYear !== "number") {
//       throw new Error("출생년도는 숫자여야 합니다.");
//     }
//     if (typeof currentYear !== "number") {
//       throw new Error("현재년도는 숫자여야 합니다.");
//     }
//     //범위 검증
//     if (birthYear < 1900 || birthYear > currentYear) {
//       throw new Error("출생년도가 올바르지 않습니다.");
//     }
//     const age = currentYear - birthYear;
//     console.log("나이", age + "세");
//     return age;
//   } catch (error) {
//     console.log("나이계산 실패:", error.message);
//     return -1; // 에러시 -1 반환
//   }
// }

// calculateAge(1990, 2025); // 성공: 35세
// calculateAge("1990", 2025); // 실패: 숫자가 아님
// calculateAge(2030, 2025); // 실패: 미래 출생년도

// // 배열처리에서 에러 핸들링
// function findUserById(users, targetId) {
//   try {
//     if (!Array.isArray(users)) {
//       throw new Error("사용자 목록이 배열이 아닙니다.");
//     }

//     //빈배열 검증
//     if (users.length === 0) {
//       throw new Error("사용자 목록이 비어있습니다.");
//     }

//     //id 검증
//     if (typeof targetId !== "number") {
//       throw new Error("ID는 숫자여야 합니다.");
//     }
//     //사용자 찾기
//     const foundUser = users.find((user) => user.id === targetId);
//     console.log();

//     if (!foundUser) {
//       throw new Error("해당 ID의 사용자를 찾을 수 없습니다.");
//     }
//     console.log("찾은 사용자:", foundUser);
//     return foundUser;
//   } catch (error) {
//     console.log("사용자 검색 실패:", error.message);
//     return null;
//   }
// }

// // 테스트 데이터
// const testUsers = [
//   { id: 1, name: "철수" },
//   { id: 2, name: "영희" },
//   { id: 3, name: "민수" },
// ];
// // 테스트
// findUserById(testUsers, 2); // 성공: 영희
// findUserById(testUsers, 999); // 실패: 사용자 없음
// findUserById("not array", 1); // 실패: 배열 아님
// findUserById([], 1); // 실패: 빈 배열

// // 여러에러를 순차적으로 처리

// function validateAndProcess(data) {
//   try {
//     //1단계: null/undefined 체크
//     if (data === null || data === undefined) {
//       throw new Error("데이터가 null 또는 undefined입니다.");
//     }
//     //2단계: 객체 체크
//     if (typeof data !== "object") {
//       throw new Error("데이터가 객체가 아닙니다.");
//     }
//     //3단계: 필수 속성 체크
//     if (!data.name) {
//       throw new Error("name 속성이 필요합니다.");
//     }
//     if (!data.email) {
//       throw new Error("email 속성이 필요합니다.");
//     }
//     //모든 검증 통과
//     console.log("검증완료:", data);
//     return true;
//   } catch (error) {
//     console.log("검증실패:", error.message);
//     return false;
//   }
// }
// validateAndProcess({ name: "철수", email: "test@test.com" }); // 성공
// validateAndProcess({ name: "철수" }); // 실패: email 없음
// validateAndProcess("not object"); // 실패: 객체 아님
// validateAndProcess(null); // 실패: null

// 다음 함수들을 try/catch와 입력 검증을 포함해 구현하세요

// 1) validateProduct (이미 올바름)
function validateProduct(product) {
  try {
    if (!product) {
      throw new Error("상품 정보가 없습니다");
    }
    if (typeof product.name !== "string") {
      throw new Error("상품명은 문자열이어야 합니다");
    }
    if (typeof product.price !== "number") {
      throw new Error("가격은 숫자여야 합니다");
    }
    if (typeof product.stock !== "number") {
      throw new Error("재고는 숫자여야 합니다");
    }
    if (product.name === "") {
      throw new Error("상품명이 비어있습니다");
    }
    if (product.price < 0) {
      throw new Error("가격은 0 이상이어야 합니다");
    }
    if (product.stock < 0) {
      throw new Error("재고는 0 이상이어야 합니다");
    }

    return product;
  } catch (error) {
    console.log("상품 검증 실패:", error.message);
    return null;
  }
}

// 2) calculateOrderTotal (수정된 버전)
function calculateOrderTotal(products, quantities) {
  try {
    // 입력값 검증
    if (!Array.isArray(products)) {
      throw new Error("상품 목록이 배열이 아닙니다");
    }
    if (!Array.isArray(quantities)) {
      throw new Error("수량 목록이 배열이 아닙니다");
    }
    if (products.length !== quantities.length) {
      throw new Error("상품 수와 수량 수가 일치하지 않습니다");
    }
    if (products.length === 0) {
      throw new Error("주문할 상품이 없습니다");
    }

    // reduce로 총액 계산 (이미 배운 메서드)
    const total = products.reduce((sum, product, index) => {
      const quantity = quantities[index];

      // 개별 상품 검증
      const validatedProduct = validateProduct(product);
      if (!validatedProduct) {
        throw new Error(`상품 ${index + 1}번이 유효하지 않습니다`);
      }

      // 수량 검증
      if (typeof quantity !== "number" || quantity < 1) {
        throw new Error(
          `수량은 1 이상의 숫자여야 합니다 (상품 ${index + 1}번)`
        );
      }

      // 재고 확인
      if (quantity > product.stock) {
        throw new Error(
          `재고가 부족합니다. ${product.name} (주문: ${quantity}, 재고: ${product.stock})`
        );
      }

      // 누적 계산
      return sum + product.price * quantity;
    }, 0);

    console.log("주문 총액:", total);
    return total;
  } catch (error) {
    console.log("총액 계산 실패:", error.message);
    return 0;
  }
}

// 3) processOrder (수정된 버전)
function processOrder(customerInfo, orderItems) {
  try {
    // 고객 정보 검증
    if (!customerInfo) {
      throw new Error("고객 정보가 없습니다");
    }
    if (typeof customerInfo.name !== "string" || customerInfo.name === "") {
      throw new Error("고객명이 유효하지 않습니다");
    }
    if (
      typeof customerInfo.email !== "string" ||
      !customerInfo.email.includes("@")
    ) {
      throw new Error("이메일이 유효하지 않습니다");
    }

    // 주문 항목 검증
    if (!Array.isArray(orderItems)) {
      throw new Error("주문 항목이 배열이 아닙니다");
    }
    if (orderItems.length === 0) {
      throw new Error("주문 항목이 없습니다");
    }

    // 상품과 수량 분리 (map 사용 - 이미 배운 메서드)
    const products = orderItems.map((item, index) => {
      if (!item || !item.product || typeof item.quantity !== "number") {
        throw new Error(`주문 항목 ${index + 1}번이 유효하지 않습니다`);
      }
      return item.product;
    });

    const quantities = orderItems.map((item, index) => {
      if (!item || !item.product || typeof item.quantity !== "number") {
        throw new Error(`주문 항목 ${index + 1}번이 유효하지 않습니다`);
      }
      return item.quantity;
    });

    // 총액 계산
    const total = calculateOrderTotal(products, quantities);
    if (total === 0) {
      throw new Error("총액 계산에 실패했습니다");
    }

    // 주문 성공 (Date 객체 대신 간단한 문자열)
    const orderResult = {
      customer: customerInfo,
      items: orderItems,
      total: total,
      status: "주문 완료",
    };

    console.log("주문 처리 성공:", orderResult);
    return orderResult;
  } catch (error) {
    console.log("주문 처리 실패:", error.message);
    return null;
  }
}

// 테스트 코드
const validProducts = [
  { name: "노트북", price: 1000, stock: 5 },
  { name: "마우스", price: 30, stock: 10 },
];

const validCustomer = {
  name: "김철수",
  email: "test@email.com",
};

const validOrder = [
  { product: validProducts[0], quantity: 1 },
  { product: validProducts[1], quantity: 2 },
];

// 성공 케이스 테스트
console.log("=== 성공 케이스 ===");
processOrder(validCustomer, validOrder);

// 실패 케이스 테스트
console.log("=== 실패 케이스 ===");
processOrder(null, validOrder); // 고객 정보 없음
processOrder(validCustomer, []); // 주문 항목 없음
