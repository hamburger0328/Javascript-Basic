// 변수 문제풀기
// 문제1. a와 b의 값을 바꾸시오
let a = 1;
let b = 2;
let c = a;
a = b;
b = c;
console.log("a :", a);
console.log("b :", b);

// 문제2.다음 연산자들의 결과값을 예측한후 console.log()를 통해 확인해 보시오
// 20 + 30 (50 = 숫자형)
// “20” + “30” (2030 = 문자형)
// “Hello” + " " + 2021 (Hello 2021 = 띄어쓰기도 문자로 인식)
// 1 + 2 * 3 (7 = 곱셈연산자 우선)
// (1 + 3) ** 2 (16)
// 1 / 0 (Infinity = 무한으로 나눠져서)
// 6 % 2 (0 = 나머지연산자)
// 7.5 % 2 (1.5 = 나머지연산자)
// 5 == 5 (true = 숫자 5와 숫자 5는 같다. 따라서 true다.)
// 5 === 5 (true = 값도 같지만 둘다 자료형이 같기 때문에 true다.)
// 5 == “5” (true)
// 5 === “5” (false = 자료형이 같지 않기 때문에 false다.)
// 5 != 5.0 (false)
// 5 !== 5.0 (false)
// “true” === true (false)
// 5 <= 5.0 (true = 숫자 5는 5.0(5)와 작거나 같다)
// 5 >= 5 (true = 숫자 5는 숫자 5보다 크거나 같다)
// true || true (true = true 또는 true 이므로 true)
// true || false (true = true 또는 false 이므로 true)
// true && true (true = true 또는 true 이므로 true)
// true && false (false = true 또는 false 이므로 false)
// !true (false = true가 아니라는 뜻)
// !false (true = false가 아니라는 뜻)
