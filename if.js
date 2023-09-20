// if 문제풀기
// if (조건문 = true / false) {
//   조건충족(true);
// }else {
// 조건불충족(false);
// }

// 문제 1. 유저가 입력하는 숫자가 0인지 음성인지 양성인지 판단하는 프로그램을 만드시오
let num = prompt("숫자를 입력하세요.", "");
if (num > 0) {
  alert("양성입니다.");
} else if (num < 0) {
  alert("음성입니다.");
} else if (num == 0) {
  alert("0입니다!");
}

/* 문제 2. 나는 대학교 교수다. 레포트 점수에따라 등급을 매기는 프로그램을 만드시오 
90~100 : A
80~89 : B
70~79 : C
60~69 : D
less than 59 : F 
*/
let score = prompt("점수를 입력해 주세요", "");

if (score >= 90) {
  alert("A학점 입니다.");
} else if (score >= 80 && score <= 89) {
  alert("B학점 입니다.");
} else if (score >= 70 && score <= 79) {
  alert("C학점 입니다.");
} else if (score >= 60 && score <= 69) {
  alert("D학점 입니다.");
} else {
  alert("F학점 입니다. 재수강하세요.");
}

/* 문제 3. 
한 지원자가 우리회사에 지원을했다. 지원자가 사용가능한 스킬은 배열에 제공이 된다

let skills = ["HTML","CSS","Javascript","React"]
Javascript와 React 둘다 할줄 안다면 “합격!” Javascript와 React 둘중 하나만 할줄 안다면 “예비”, 두 스킬이 없다면 “탈락” 을 보여주는 프로그램을 짜시오

input : let skills = ["HTML","CSS","Javascript","React"]
output: 합격 
input:let skills = ["HTML","CSS","Javascript"] 
output: 예비 
input:let skills = ["HTML","CSS"] 
output: 탈락
*/

let skills = ["HTML", "CSS", "Javascript", "React"];
let question = prompt("스킬을 적어 주세요", "CSS,React");

if (question === skills[2] && question === skills[3]) {
  alert("합격!");
} else if (question === skills[2] || question === skills[3]) {
  alert("예비!");
} else {
  alert("탈락!");
}
