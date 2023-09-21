// 함수 문제풀기
/* 문제1.
- "안녕 내 이름은 제시카야"라는 문장을 프린트하는 함수 'greet’를 만드시오
- 이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오 예) “안녕 내 이름은 에밀리야”, “안녕 내 이름은 할리야”
- 매개변수로 전달받은 이름을 반환하게 함수를 수정하시오 <????
*/
function greet(name) {
  console.log(`안녕 내 이름은 ${name}야`);
}
greet("에밀리");
greet("할리");

/* 문제2.
- meetAt 함수를 만들어주세요.
- 인자를 세개 받습니다.
- 첫번째 인자는 년도에 해당하는 숫자입니다.
- 두번째 인자는 월에 해당하는 숫자입니다.
- 세번째 인자는 일에 해당하는 숫자입니다.

- 년도 인자만 받았을 경우 → "1234년" 과 같은 형식의 문자열을 리턴 해주세요.
- 년도,월 인자를 받았을 경우 → 년도와 월을 조합해서 "1234년 5월" 과 같은 형식의 문자열을 리턴 해주세요.
- 년도,월,일 인자를 전부 받았을 경우 → 년도,월,일을 조합해서 "1234/5/6" 과 같은 형식의 문자열을
리턴 해주세요.
*/

let years = "";
let months = "";
let days = "";

function meetAt(year, month, day) {
  if (year < 2024 && month <= 12 && days <= 31) {
    (years = year), (months = month), (days = day);
    console.log(years, months, days);

    if (days) return `${years}년 ${months}월 ${days}일`;
    if (months) return `${years}년 ${months}월`;
    if (years) return `${years}년`;
  } else {
    return "안녕";
  }
}
meetAt(2023, 12, 19);

/*문제3.
- findSmallestElement 함수를 구현해 주세요. 
findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 배열입니다. 
arr 의 값들 중 가장 작은 값을 리턴 해주세요. 
만일 arr 가 비어있으면 0을 리턴 해주세요. 

예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 0이 리턴 되어야 합니다.

이용되는 배열
[100,200,3,0,2,1]
*/
function findSmallestElement(num) {
  console.log(num);
  for (let i = 0; i >= 0; i++) {
    console.log(i);
  }
}
findSmallestElement([100, 200, 3, 0, 2, 1]);

/*문제4.
- 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오
예) 12300인 경우
*/
function money(won) {
  // 만원1장 천원2장 백원3개
  // 조건 , 오만원,만원,오천원,천원,오백원,백원,오십원,십원
}
money(12300);
