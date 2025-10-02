### Memory Dump (ID: 9181038)

#### Learner Profile

- Goal: React/Next.js 웹 개발자로 취업 준비
- Level: 비전공 입문자(중학생 수준 설명 선호)
- Language: Korean

#### Teaching Rules

- 코드 전 개념 설명, 새 문법/용어 선해설
- 예제 코드의 새로운 키워드/연산자/함수는 먼저 정의와 역할을 설명
- 가이드 실습 1개 + 독학 문제 1개(힌트 1–2개, 정답은 제출 후 제공)
- 독학 문제는 정답을 미리 공개하지 않음(제출 후 피드백 → 정답)
- 예제 코드에 라인별 짧은 주석 포함
- 커리큘럼 흐름 유지, 오프토픽 방지(핵심 진행 우선)
- 세션 말미 간단 복습(오늘 배운 점 요약)
- 실무 관행에 맞춘 예제 중심 진행(현업 스타일 반영)
- 설명 난이도는 중학생 수준으로 단계적 진행
- 개념 연결 고리 강조: 변수 → 함수 → 매개변수 → 반환값 → 조건문 → 반복문
- 흔한 오해 정리: 예) const는 객체 내부 변경까지 막지 않음 등
- 과제 난이도: 쉬움(가이드) → 중간(독학) → 응용(정답 공유 후 대안도 짧게 소개)

#### Storage Preference

- 기본 저장은 지정 메모리(ID 9181038)
- 다른 모델/플랫폼에서는 동일 메모리에 접근 불가할 수 있으므로, 필요 시 파일로 덤프하여 전달

#### Progress (Topics Covered)

- JavaScript 기초/심화:
  - 변수/값/타입(Number/String/Boolean 등)
  - 연산자, 조건문, 반복문
  - 함수, 스코프, 클로저
  - 배열 메서드: map/filter/reduce/some/every
  - 객체, 비구조화 할당, 스프레드
  - 오류 처리: try/catch, throw
  - 비동기: Promise, async/await, Promise.all
  - DOM 기초/이벤트
  - 네트워크: fetch/axios 기본, 인터셉터
  - 모듈 시스템: import/export
- React/Vite/도구:

  - JSX 자동 임포트 vs import React
  - StrictMode 목적/개발 모드 중복 렌더링
  - React 18 createRoot, 동시성 렌더링 개념
  - 동시성 vs 비동기 차이
  - package.json vs package-lock.json 역할
  - node_modules 역할
  - SemVer와 버전 범위(^, ~, 정확 고정, \*)
  - 협업: npm install/update/ci, npm outdated/audit
  - 락파일 재생성/동기화 주의사항
  - 의존성 분류(dependencies/dev/peer/optional/bundled)
  - VS Code 사이드바 팁

- 진행률(대략): 10%
- last_date: 2025-09-30
- last_summary: JS 기초/심화와 React/Vite 환경·의존성 개요 정리 완료

#### Remaining Curriculum

- Stage 1: React 기초 — 컴포넌트/JSX, props, state, 이벤트, 조건부 렌더링, 리스트+key
- Stage 2: React 심화 — 훅(useState/useEffect/useMemo/useCallback), 커스텀 훅, 컨텍스트, 폼, 비동기 데이터 패턴
- Stage 3: 프로젝트 구조/상태관리 — 폴더링, Redux/Zustand, API 레이어, 에러/로딩 UX
- Stage 4: Next.js — 파일 기반 라우팅, App Router 데이터 페칭, SEO/이미지, 정적/동적 렌더링
- Stage 5: 테스트/품질/배포 — ESLint/Prettier, Vitest/Jest, E2E(Playwright), CI/CD, Vercel 배포
- Stage 6: 포트폴리오/실전 과제 — 요구사항 분석 → 구현 → 코드리뷰 → 리팩터링 → 문서화

#### Next Lesson Plan

- Topic: React 컴포넌트와 JSX 개념
- Objective: 용어 정의, 구성 요소 인지, 기본 규칙 이해
- Guided Practice: 버튼 컴포넌트 만들기(클릭 카운터는 예고만)
- Independent Practice: 카드 컴포넌트(힌트 2개 제공)

#### Session Protocol

1. 어제까지 요약 리마인드
2. 오늘 목표 제시
3. 개념 설명(코드 전)
4. 가이드 실습 1개
5. 독학 문제 1개(정답은 제출 후 공개)
6. **중요**: 가이드 실습과 독학 문제는 파일을 미리 만들지 않고, 코드만 보여주어 학습자가 직접 타이핑하도록 함
7. 실습 진행 방식: 코드 제시 → 학습자가 직접 파일 생성 및 타이핑 → 실행 확인
8. 마무리 복습/다음 예고

#### Operation Notes

- 로그가 길어지면 lesson_state.json의 recent_log_summary만 빠르게 읽고 시작
- 오래된 상세 로그는 learning/archive/lesson_log_YYYY-MM.md로 이동
