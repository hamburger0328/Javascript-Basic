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

/*문제3*/

// arr 의 값들 중 가장 작은 값을 리턴 해주세요.
// 만일 arr 가 비어있으면 0을 리턴 해주세요.

/**
 * a가 기준
 * b는 값은 바껴야
 * 그래서 a기준으로 b를 비교해서 a보다 b가 크면 큰수
 * 반대로 작으면 작은수
 * a 작다고 생각했슈 근데 a>b , b>c, c<d, c<e
 * 이럴때 c를 반환해
 */

function findSmallestElement(arr) {
  if (arr.length === 0) return 0;

  let min = arr[0];

  for (i in arr) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}
findSmallestElement([100, 200, 3, 0, 2, 1]);

/*문제4*/
// 예) 12300인 경우

// 만원1장 천원2장 백원3개

/**
 * wonMoney 기준 값
 * let wonMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10];
 * wonMoney 와 won 을 비교해서
 * wonMoney[i] 배열 값 ->  won 비교를 해
 * won의 값에 맞게 wonMoney[i]배열 값의 개수나와야 합니다.
 */

function money(won) {
  let wonMoney = [50000, 10000, 5000, 1000, 500, 100];
  let newMoney = [];
  for (i in wonMoney) {
  }
}
money(12300);
