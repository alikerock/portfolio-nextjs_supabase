# CSS 컨벤션 가이드

## 1. 기본 원칙
- CSS3 표준 속성 우선
- 불필요한 중복 스타일 제거

## 2. 코드 스타일
- 들여쓰기는 **스페이스 2칸**
- 속성 선언 순서: **레이아웃 → 박스모델 → 타이포그래피 → 시각적 효과**
```css
.selector {
  display: flex;
  width: 100%;
  font-size: 16px;
  color: #333;
}
```

## 3. 네이밍 규칙
#### RSCSS (Reasonable System for CSS) (\`.block__element--modifier\`)
- 형식: .component, .component.is-state, .component__part, .component--variant
- 예: card, card__title, card--featured, card.is-loading
- “상태(state)·부분(part)·변형(variant)”를 명확히 구분

## 4. 단위
- 폰트: \`rem\` 또는 \`em\`  
- 여백/크기: \`px\` 또는 \`%\`  
- 색상: HEX 또는 RGBA

## 5. 주석
```css
/* Header 영역 스타일 */
header { ... }
```
