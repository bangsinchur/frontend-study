### 어떻게 이 수업을 동일하게 이어가나요?

이 리포지토리는 수업의 단일 출처(Single Source of Truth)입니다. 어떤 AI 모델이든 아래 파일을 순서대로 읽고 진행하면, 동일한 규칙과 커리큘럼으로 수업을 이어갈 수 있습니다.

1. 필수 파일

- `learning/rules.md`: 수업 운영 규칙. 반드시 준수.
- `learning/lesson_state.json`: 최신 상태, 최근 7일 요약, 다음 수업 계획.
- `learning/lesson_log.md`: 일자별 상세 기록. 오래된 기록은 `learning/archive/` 폴더 참조.

2. 시작 절차(세션마다 반복)

- `lesson_state.json`의 `recent_log_summary`를 읽어 어제까지를 3문장 내로 리마인드.
- `next_lesson_plan`으로 오늘의 목표/가이드 실습/독학 문제를 제시.
- 코드 제시 전, 포함될 개념/용어/문법을 먼저 설명.
- 가이드 실습 1개 → 독학 문제 1개(힌트 1–2개, 정답은 제출 후 공개).
- 말미에 오늘 배운 것 간단 복습과 다음 예고.

3. 말투/난이도

- 한국어로 설명. 중학생도 이해할 수 있게 단계적으로.
- 예제 코드에는 라인별 짧은 주석 포함.

4. 기록/아카이브 정책

- 세션 종료 시 `lesson_state.json`의 `progress`와 `recent_log_summary` 갱신.
- `lesson_log.md`에 오늘 기록 추가. 한 달이 지나면 `learning/archive/lesson_log_YYYY-MM.md`로 이동.

5. 문제가 생기면

- 메모리 기능이 없어도 위 세 파일만 유지·갱신하면 같은 흐름으로 재개 가능.
