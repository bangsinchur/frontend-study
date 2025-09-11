function getAgeMessage(name, birthYear){
    let currentYear = 2025;
    let age = currentYear - birthYear
    return `${name}님은 ${birthYear}년 생이며, 올해 나이는 ${age}살 입니다.`
}

let message = getAgeMessage('신철', 1991);
console.log(message)


function totalPay(price, quantity){
    let payment = price * quantity
    return `총액은 ${payment}원 입니다.`
}

let pay = totalPay(2000, 6)
console.log(pay)

function add1(a,b) {
    return a+b;
}

const add2 = function (a,b) {
    return a + b;
}

const add3 = (a,b) => a+b;

console.log(add1(2,3))
console.log(add2(4,5))
console.log(add3(6,7))