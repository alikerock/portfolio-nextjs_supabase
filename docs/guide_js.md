# JavaScript 컨벤션 가이드

## 1. 문법 스타일
- ES6 이상 문법 사용
- \`var\` 대신 \`let\`, \`const\` 사용
- 세미콜론(\`;\`) 사용

## 2. 들여쓰기와 공백
- 들여쓰기는 **스페이스 2칸**
- 연산자 앞뒤, 콤마 뒤에 공백
```javascript
const sum = a + b;
```

## 3. 네이밍 규칙
- 변수/함수: \`camelCase\`
- 클래스: \`PascalCase\`
- 상수: \`UPPER_SNAKE_CASE\`

## 4. 함수 작성
- 화살표 함수 사용 권장
- 하나의 함수는 하나의 역할만 수행
```javascript
const getUserName = (user) => user.name;
```

## 5. 주석
- 함수/모듈 상단에 JSDoc 주석 권장
```javascript
/**
 * 두 수의 합을 반환한다.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
```

---
*마지막 수정: YYYY-MM-DD*