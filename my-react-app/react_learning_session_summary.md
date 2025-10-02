## 학습 기록 덤프 (메모리 ID 9181038)

- 생성일: 2025-09-30
- 출처: 메모리 ID 9181038에 저장된 진행 내역을 파일로 내보낸 내용

### 진행 요약

사용자가 "어디까지 진행했지?"라고 질문했고, 현재까지의 학습 주제를 정리했습니다. 앞으로의 방향은 React 기초(컴포넌트, JSX, props/state)부터 단계적으로 실습 위주로 진행합니다.

### 다룬 주제 목록

- React/Vite 환경에서 JSX 자동 임포트와 수동 `import React` 차이
- `StrictMode`의 목적과 개발 모드에서의 중복 렌더링 현상
- React 18의 `createRoot`와 동시성 렌더링(Concurrent Rendering) 개념
- 동시성 렌더링 vs 비동기(Async)의 차이
- `package.json`과 `package-lock.json`의 역할 비교
- `node_modules` 폴더의 역할
- SemVer(버전 규칙)과 범위 지정: `^`, `~`, 정확 고정, `*`
- 팀 협업 시 워크플로우: `npm install` / `npm update` / `npm ci`
- 점검 도구: `npm outdated`, `npm audit` 활용법
- 락파일 재생성 및 동기화 절차와 주의사항
- 의존성 분류: `dependencies` / `devDependencies` / `peerDependencies` / `optionalDependencies` / `bundledDependencies` 와 실무 적용 가이드
- VS Code 사이드바 위치 관련 팁

### 다음 단계 제안

- React 기초부터 시작: 컴포넌트, JSX 문법, `props`와 `state` 개념 정립
- 개념 설명 후, 따라치기 가능한 간단 실습 → 혼자 풀어보는 문제로 진행

### 메모

- 사용자의 요청에 따라 앞으로는 학습 기록을 로컬 파일이 아닌 지정된 메모리(ID: 9181038)에 우선 저장합니다. 필요 시에만 이렇게 파일로 내보냅니다.

# React 학습 세션 요약

## 학습 진행 상황 (최신 업데이트)

### 완료된 개념들

#### 1. React 기본 환경 설정

- **Vite + React 프로젝트 설정**

  - `npm create vite@latest my-react-app -- --template react`
  - 개발 서버 실행: `npm run dev`
  - HMR(Hot Module Replacement) 기능

- **JSX 자동 임포트**

  - React 17+ 버전에서 `import React` 불필요
  - `vite.config.js`에서 `jsxRuntime: "automatic"` 설정
  - 수동 임포트 vs 자동 임포트 차이점

- **StrictMode와 createRoot**
  - `StrictMode`: 개발 모드에서 문제 조기 발견
  - 중복 렌더링으로 부작용 감지
  - `createRoot`: React 18의 새로운 렌더링 API
  - 동시성 렌더링 지원

#### 2. 패키지 관리 (npm)

- **package.json vs package-lock.json**

  - `package.json`: 프로젝트 메타데이터, 의존성 범위 지정
  - `package-lock.json`: 정확한 버전 고정, 재현 가능한 빌드
  - 둘 다 필요한 이유: 유연성과 안정성의 균형

- **node_modules 폴더**

  - 로컬 패키지 저장소
  - 모듈 해석 및 의존성 관리

- **SemVer (Semantic Versioning)**

  - Major.Minor.Patch 형식
  - 버전 범위: `^` (호환), `~` (패치만), 정확 고정, `*` (모든 버전)

- **의존성 분류**
  - `dependencies`: 프로덕션에 필요한 패키지
  - `devDependencies`: 개발에만 필요한 패키지
  - `peerDependencies`, `optionalDependencies`, `bundledDependencies`

#### 3. React 핵심 개념

##### 컴포넌트

- **정의**: 재사용 가능한 UI 블록
- **함수 컴포넌트**: `function ComponentName() { return JSX; }`
- **export default**: 기본 내보내기
- **네이밍 규칙**: PascalCase 사용

##### Props

- **정의**: 외부에서 전달받는 데이터 (읽기 전용)
- **사용법**: `function Component(props)` 또는 `function Component({name, age})`
- **전달**: `<Component name="값" count={숫자} />`
- **기본값 설정**: `{ title = "제목 없음", count = 0 } = {}`

##### State

- **정의**: 컴포넌트 내부의 변경 가능한 데이터
- **useState 훅**: `const [value, setValue] = useState(초기값)`
- **함수형 업데이트**: `setValue(prev => prev + 1)`
- **리렌더링**: set 함수 호출 시 자동으로 화면 다시 그리기

#### 4. useState 훅 규칙

- **컴포넌트 최상위에서만 호출**
- **조건문/반복문/중첩 함수 안에서 호출 금지**
- **함수형 업데이트 권장**: 이전 값 기반 안전한 업데이트

#### 5. 이벤트 처리

- **이벤트 이름**: React 표준 사용 (`onClick`, `onChange` 등)
- **함수 참조**: `onClick={handleClick}` (간단한 경우)
- **화살표 함수**: `onClick={() => handleClick()}` (매개변수 전달, 복잡한 경우)
- **이벤트 객체**: 자동으로 전달됨

#### 6. 조건부 렌더링

- **삼항 연산자**: `{condition ? <ComponentA /> : <ComponentB />}`
- **논리 연산자**: `{condition && <Component />}`
- **조건문**: 함수 내부에서 if문 사용

### 실습 완료

#### 1. Props 연습 (Guided)

```javascript
function TitleBox(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>현재 개수: {props.count}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Props 연습</h1>
      <TitleBox title="첫 번째 상자" count={1} />
      <TitleBox title="두 번째 상자" count={2} />
    </div>
  );
}
```

#### 2. State 연습 (Independent)

```javascript
function ToggleBox() {
  const [visible, setVisible] = useState(true);

  const handleToggle = () => {
    setVisible((v) => !v);
  };

  return (
    <div>
      {visible ? <h2>토글 연습중</h2> : <h2>숨긴상태</h2>}
      <button onClick={handleToggle}>{visible ? "숨기기" : "보이기"}</button>
    </div>
  );
}
```

### 주요 질문과 답변

#### Q: useState 훅 규칙에서 조건문/반복문 안에서 호출 금지?

A: `useState` 호출 자체를 조건문 안에서 하면 안됨. `setValue` 함수 안에서 조건문 사용은 가능.

#### Q: `prev => prev + 1`의 동작 원리?

A: React가 현재 상태값을 `prev` 매개변수로 전달하여 함수를 실행. 항상 최신 값을 기준으로 업데이트.

#### Q: 함수 참조 vs 화살표 함수 차이?

A: 함수 참조는 간단할 때, 화살표 함수는 매개변수 전달이나 복잡한 로직일 때 사용.

#### Q: 이벤트에 함수만 들어갈 수 있나?

A: 함수, 화살표 함수, 조건부 함수, undefined 등이 들어갈 수 있음. 함수 호출 결과는 즉시 실행되므로 주의.

### 다음 학습 예정

- 이벤트 처리 심화
- 리스트 렌더링 (map)
- 폼 처리
- useEffect 훅
- 컴포넌트 간 데이터 전달

### 학습 진행률

- ✅ 컴포넌트 개념
- ✅ Props 개념
- ✅ State와 useState 개념
- 🔄 다음 단원 준비 중

---

_세션 날짜: 2024년 12월_
_학습자: React 초보자 (고등학교 졸업, 비전공)_
_목표: React와 Next.js를 활용한 웹 개발자 취업_
