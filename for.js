// 반복문 문제풀기
// 문제 1. 1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.
// 예를 들어 1+2+3+4+5+6 ... 99+100 이런식으로

let num = 0;
for (let i = 1; i <= 100; i++) {
  num += i;
}

// 문제 2. 1부터 100까지 홀수만 출력하자.
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    //i에서 2를 나누었을때 나머지 값이 1일때
    console.log(i); // 1,3,5,7,9...
  }
}

// 문제 3. 1부터 50까지 369결과를 프린트하자.
for (let i = 1; i <= 50; i++) {
  console.log(i); //1~50
  let changeString = i.toString();
  let result = "";

  for (let j = 0; j < changeString.length; j++) {
    if (
      changeString[j] === "3" ||
      changeString[j] === "6" ||
      changeString[j] === "9"
    ) {
      result += "짝";
    }
  }
  console.log(result.length > 0 ? result : i);
}

// 문제 4. 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.
for (let i = 1; i <= 7; i++) {
  console.log(i);
}
