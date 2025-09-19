// // 기본 데이터
// const students = {
//     1: { name: "김철수" },
//     2: { name: "이영희" },
//     3: { name: "박민수" }
// };

// const grades = {
//     1: { math: 90, english: 85 },
//     2: { math: 95, english: 92 },
//     3: { math: 88, english: 88 }
// };

// // 학생 정보를 가져오는 함수
// function getStudent(studentId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const student = students[studentId];
//             if (student) {
//                 resolve(student);
//             } else {
//                 reject(new Error("학생을 찾을 수 없습니다."));
//             }
//         }, 1000);
//     });
// }

// // 성적을 가져오는 함수
// function getGrade(studentId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const grade = grades[studentId];
//             if (grade) {
//                 resolve(grade);
//             } else {
//                 reject(new Error("성적을 찾을 수 없습니다."));
//             }
//         }, 1000);
//     });
// }

// // 여러 학생의 정보와 성적을 한번에 조회하기
// async function getStudentsDetails(studentIds) {  // [1, 2, 3]
//     try {
//         // 방법 1: Promise.all()로 모든 학생의 정보 가져오기
//         const studentsInfo = await Promise.all(
//             studentIds.map(id => getStudent(id))
//         );
//         console.log("모든 학생 정보:", studentsInfo);

//         // 방법 2: 각 학생의 정보와 성적을 함께 가져오기
//         const studentsDetails = await Promise.all(
//             studentIds.map(async (id) => {
//                 const student = await getStudent(id);
//                 const grade = await getGrade(id);
//                 return {
//                     ...student,
//                     ...grade
//                 };
//             })
//         );
//         console.log("학생들의 정보와 성적:", studentsDetails);

//     } catch (error) {
//         console.log("데이터 조회 실패:", error.message);
//     }
// }

// // 테스트
// getStudentsDetails([1, 2, 3]);

const userMap = new Map();
userMap.set("name", "김철수");
userMap.set("age", 25);

console.log(userMap);