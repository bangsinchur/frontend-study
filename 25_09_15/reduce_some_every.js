const prices = [100, 200, 300, 400, 500];

const total = prices.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; // 누적값 + 현재값
}, 0); // 초기값 0

console.log("총합 ", total);

const maxPrice = prices.reduce((max, current) => {
  return current > max ? current : max; //현재값이 더 크면 현재값, 아니면 기존 최댓값
}, 0); // 초기값 0

console.log("최댓값:", maxPrice);

//find: 조건에 맞는 첫 번째 요소 찾기
const users = [
  { id: 1, name: "김철수", age: 25 },
  { id: 2, name: "이영희", age: 30 },
  { id: 3, name: "박민수", age: 35 },
];

//id가 2인 사용자 찾기
const foundUser = users.find((user) => {
  return user.id === 2; // 조건 : id가 2인지 확인
});
console.log("찾은 사용자:", foundUser);

//30세 이상 첫번째 사용자 찾기
const olderUser = users.find((user) => user.age >= 30);
console.log("30세 이상 첫번째:", olderUser);

// some: 하나라도 만족하면 true
const scores = [45, 78, 82, 55, 90];

const hasHighScore = scores.some((score) => {
  return score >= 80; // 조건 80이상
});
console.log("80점 이상 잇음:", hasHighScore); //true

// 모든 사용자 중 관리자가 있는가?
const people = [
  { name: "user1", role: "user" },
  { name: "admin1", role: "admin" },
  { name: "user2", role: "user" },
];

const hasAdmin = people.some((person) => person.role === "admin");
console.log("관리자 있음:", hasAdmin); //true

// 4) every: 모든 요소가 조건 만족하면 true
const ages = [25, 30, 35, 28];

const allAdults = ages.every((age) => {
  return age >= 20; // 20세 이상인지 확인
});
console.log("모두 성인:", allAdults); //true

const examScores = [75, 82, 55, 90];
const allPassed = examScores.every((score) => score >= 60);
console.log("모두 합격:", allPassed); // false (55점 때문에)

// 5) 체이닝 패턴: 여러 메서드 연결
const products = [
  { name: "노트북", price: 1000, category: "electronics" },
  { name: "콤퓨타", price: 111000, category: "electronics" },
  { name: "마우스", price: 50, category: "electronics" },
  { name: "책상", price: 200, category: "furniture" },
  { name: "의자", price: 150, category: "furniture" },
];

// 전자제품 필터링 -> 가격에 세금 10%추가 -> 총합
const electronicsTotal = products
  .filter((product) => product.category === "electronics")
  .map((product) => product.price * 1.1) // 세금 10%추가
  .reduce((sum, price) => sum + price, 0); // 총합

console.log("전자제품총액(세금포함):", electronicsTotal);

//가장비싼 전자제품 찾기
const mostExpensiveElectronics = products
  .filter((product) => product.category === "electronics")
  .reduce((max, current) => (current.price > max.price ? current : max)); //최댓값

console.log("가장비싼 전자제품:", mostExpensiveElectronics);

//문제: 온라인 쇼핑몰 주문 데이터를 처리하는 함수들을 작성하세요.

const orders = [
  {
    id: 1,
    userId: 101,
    items: [
      { name: "노트북", price: 1000, quantity: 1 },
      { name: "콤퓨타", price: 2000, quantity: 2 },
    ],
    status: "completed",
  },
  {
    id: 2,
    userId: 102,
    items: [
      { name: "마우스", price: 30, quantity: 2 },
      { name: "키보드", price: 80, quantity: 1 },
    ],
    status: "pending",
  },
  {
    id: 3,
    userId: 101,
    items: [{ name: "모니터", price: 300, quantity: 1 }],
    status: "completed",
  },
  {
    id: 4,
    userId: 103,
    items: [{ name: "헤드셋", price: 150, quantity: 1 }],
    status: "cancelled",
  },
];
// 요구사항:
// 완료된 주문(status가 "completed")의 총 매출액을 구하세요. filter,map,reduce 사용
// 특정 사용자(userId가 101)의 모든 주문이 완료되었는지 확인하세요. filter.every
// 취소되지 않은 주문 중 총액이 100 이상인 주문이 하나라도 있는지 확인하세요. filter.some
// 힌트:
// 각 주문의 총액은 items 배열에서 price × quantity를 모두 더한 값
// filter → map → reduce 체이닝 활용
// every, some 메서드로 조건 체크

//1.완료된 주문 총액
const orderMaxPrice = orders
  .filter((order) => order.status === "completed")
  .map((order) => order.items.map((item) => item.price * item.quantity).reduce((sum, price) => sum + price, 0))
  .reduce((sum, price) => sum + price, 0)

console.log(orderMaxPrice);

//2. 특정사용자의 모든주문이 완료되었는지 확인.
const orderSuccess = orders
.filter((order)=> order.userId === 101).every((order)=> order.status === 'completed')

console.log(orderSuccess)

//3. 취소되지 않은 주문 총액이 100 이상인 주문이 하나라도 있는지 확인
const orderTotal = orders
.filter(order=> order.status !== "cancelled")
.some((order)=> order.items.map(item=> item.price * item.quantity).reduce((sum,price)=> sum+ price,0) >= 100)

console.log(orderTotal)

