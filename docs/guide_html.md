# HTML 컨벤션 가이드

## 1. 문서 구조
- HTML5 표준 문법 사용
- `<!DOCTYPE html>` 선언 필수
- 언어 속성(\`lang\`) 명시

```
<!DOCTYPE html>
<html lang="ko">
```

## 2. 들여쓰기와 공백
- 들여쓰기는 **스페이스 2칸**
- 불필요한 빈 줄/공백 제거

## 3. 시멘틱 태그 사용
- 의미에 맞는 HTML 태그 사용 (\`header\`, \`main\`, \`footer\`, \`article\`, \`section\` 등)
- 불필요한 `<div>` 남용 금지

## 4. 속성 작성 순서
1. \`id\`, \`class\`
2. \`name\`, \`data-*\`
3. \`src\`, \`href\`, \`type\`, \`alt\`
4. \`role\`, \`aria-*\`

## 5. 접근성
- 이미지에 \`alt\` 속성 필수
- 폼 요소에는 \`label\` 연결
- 색상만으로 구분하지 않기
