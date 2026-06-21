# 개인용 플래너 웹서비스 기획서

> 문서 버전: v1.0  
> 작성일: 2026-06-13  
> 서비스 유형: 개인 일정·할 일·목표 통합 관리 웹서비스  
> 기술 스택: Next.js / React / Supabase

---

## 1. 프로젝트 개요

### 1.1 프로젝트명

**Planary**  
개인의 일정, 할 일, 목표, 메모를 하나의 화면에서 관리하는 개인용 플래너 웹서비스

> 프로젝트명은 가칭이며 개발 단계에서 변경할 수 있다.

### 1.2 기획 배경

개인 사용자는 일정 관리를 위해 캘린더, 할 일 앱, 메모 앱, 습관 관리 앱을 각각 사용하는 경우가 많다.  
이 과정에서 정보가 여러 서비스에 분산되고, 계획과 실제 수행 결과를 한 번에 확인하기 어렵다는 문제가 발생한다.

본 서비스는 다음 정보를 하나의 웹서비스에서 통합 관리하는 것을 목표로 한다.

- 일정
- 할 일
- 반복 업무
- 목표
- 습관
- 메모
- 일간·주간 회고
- 수행 통계

### 1.3 서비스 목표

1. 하루에 해야 할 일과 일정을 한 화면에서 확인할 수 있도록 한다.
2. 장기 목표와 일상 업무를 연결한다.
3. 계획 대비 수행 결과를 기록하고 시각화한다.
4. PC와 모바일 브라우저에서 동일하게 사용할 수 있도록 한다.
5. 복잡한 협업 기능을 제외하고 개인 사용에 최적화한다.

### 1.4 핵심 가치

| 핵심 가치 | 설명 |
|---|---|
| 통합성 | 일정, 할 일, 목표, 습관, 메모를 한 곳에서 관리 |
| 단순성 | 처음 사용하는 사용자도 바로 이해할 수 있는 UI |
| 지속성 | 반복 일정, 습관, 회고 기능을 통해 꾸준한 사용 유도 |
| 가시성 | 오늘의 우선순위와 진행률을 직관적으로 제공 |
| 개인화 | 사용자별 카테고리, 색상, 시작 요일, 알림 설정 제공 |

---

## 2. 타깃 사용자

### 2.1 주요 타깃

- 개인 일정을 체계적으로 관리하고 싶은 직장인
- 업무와 개인 일정을 함께 관리하는 프리랜서
- 과제, 시험, 프로젝트 일정을 관리하는 학생
- 장기 목표와 습관을 함께 관리하고 싶은 사용자
- 여러 플래너 서비스를 하나로 통합하고 싶은 사용자

### 2.2 사용자 페르소나

#### 페르소나 A: 직장인

- 이름: 김민수
- 연령: 34세
- 직업: 서비스 기획자
- 사용 환경: 회사 PC, 개인 노트북, 스마트폰
- 니즈:
  - 오늘 해야 할 업무를 빠르게 확인
  - 개인 일정과 업무 일정을 분리하여 관리
  - 반복 업무 누락 방지
  - 주간 업무 진행률 확인

#### 페르소나 B: 프리랜서

- 이름: 이서연
- 연령: 29세
- 직업: 디자이너
- 사용 환경: 노트북 중심
- 니즈:
  - 여러 프로젝트의 마감 일정 관리
  - 중요도와 긴급도에 따른 할 일 분류
  - 프로젝트별 진행률 확인
  - 일정별 메모와 링크 저장

---

## 3. 서비스 범위

### 3.1 MVP 범위

MVP에서는 개인 플래너의 핵심 사용 흐름에 집중한다.

- 회원가입 및 로그인
- 오늘 대시보드
- 캘린더
- 할 일 관리
- 목표 관리
- 습관 관리
- 메모
- 카테고리 및 태그
- 일간·주간 통계
- 사용자 설정
- 반응형 웹

### 3.2 2차 개발 범위

- 브라우저 푸시 알림
- 이메일 리마인더
- Google Calendar 연동
- 일정 드래그 앤 드롭
- AI 일정 추천
- 자연어 일정 등록
- 템플릿 공유
- 데이터 내보내기 및 가져오기
- PWA 지원
- 다크모드 고도화

### 3.3 제외 범위

MVP에서는 다음 기능을 제외한다.

- 팀 협업
- 조직 및 권한 관리
- 타 사용자 일정 공유
- 실시간 공동 편집
- 결제 및 구독
- 네이티브 모바일 앱
- 화상회의
- 파일 공동 저장소

---

## 4. 정보 구조

```text
홈
├─ 오늘
├─ 캘린더
│  ├─ 월간
│  ├─ 주간
│  └─ 일간
├─ 할 일
│  ├─ 전체
│  ├─ 오늘
│  ├─ 예정
│  ├─ 완료
│  └─ 카테고리별
├─ 목표
│  ├─ 진행 중
│  ├─ 완료
│  └─ 보관
├─ 습관
│  ├─ 오늘의 습관
│  └─ 기록
├─ 메모
│  ├─ 전체
│  ├─ 즐겨찾기
│  └─ 보관
├─ 통계
│  ├─ 일간
│  ├─ 주간
│  └─ 월간
└─ 설정
   ├─ 프로필
   ├─ 화면 설정
   ├─ 알림 설정
   ├─ 카테고리 관리
   └─ 데이터 관리
```

---

## 5. 핵심 사용자 시나리오

### 5.1 첫 방문 및 가입

1. 사용자가 랜딩 페이지에 접속한다.
2. 서비스 주요 기능을 확인한다.
3. 이메일 또는 소셜 계정으로 가입한다.
4. 기본 프로필과 시간대를 설정한다.
5. 온보딩에서 관심 기능과 주간 시작 요일을 선택한다.
6. 오늘 대시보드로 이동한다.

### 5.2 할 일 등록

1. 사용자가 빠른 추가 버튼을 누른다.
2. 할 일 제목을 입력한다.
3. 날짜, 시간, 우선순위, 카테고리, 태그를 선택한다.
4. 저장한다.
5. 오늘 목록 또는 해당 날짜에 할 일이 표시된다.
6. 완료 체크 시 완료 상태와 완료 시간이 기록된다.

### 5.3 일정 등록

1. 캘린더에서 날짜 또는 시간 영역을 선택한다.
2. 일정 제목과 시간을 입력한다.
3. 반복 여부, 카테고리, 메모를 설정한다.
4. 저장한다.
5. 캘린더와 오늘 대시보드에 일정이 표시된다.

### 5.4 목표와 할 일 연결

1. 목표를 생성한다.
2. 목표 기간과 목표 수치를 입력한다.
3. 목표에 하위 할 일을 연결한다.
4. 연결된 할 일 완료 시 목표 진행률이 자동으로 갱신된다.
5. 목표 상세 화면에서 진행 상황을 확인한다.

### 5.5 습관 기록

1. 사용자가 오늘의 습관 목록을 확인한다.
2. 수행한 습관을 체크한다.
3. 연속 수행 일수와 달성률이 갱신된다.
4. 주간 및 월간 통계에서 기록을 확인한다.

---

## 6. 주요 기능 명세

## 6.1 인증

### 기능

- 이메일 회원가입
- 이메일 로그인
- 로그아웃
- 비밀번호 재설정
- 이메일 인증
- 소셜 로그인
  - Google
  - Apple 선택 적용
- 로그인 상태 유지
- 회원 탈퇴

### 정책

- 인증은 Supabase Auth를 사용한다.
- 인증되지 않은 사용자는 서비스 내부 페이지에 접근할 수 없다.
- 사용자별 데이터는 Supabase RLS로 분리한다.
- 회원 탈퇴 시 사용자 데이터 삭제 또는 유예 삭제 정책을 적용한다.

---

## 6.2 오늘 대시보드

### 목적

사용자가 접속 후 오늘의 일정과 할 일을 즉시 확인하고 실행할 수 있는 메인 화면

### 구성 요소

- 오늘 날짜 및 인사말
- 오늘의 진행률
- 오늘 일정
- 오늘 할 일
- 중요 할 일
- 오늘의 습관
- 목표 진행 현황
- 빠른 메모
- 빠른 추가 버튼
- 미완료 항목 이월 안내

### 기능

- 할 일 완료 처리
- 습관 체크
- 일정 상세 확인
- 항목 순서 변경
- 오늘 진행률 계산
- 전날 미완료 항목 이월
- 대시보드 위젯 표시 여부 설정

### 진행률 계산 예시

```text
오늘 진행률 = 완료한 오늘 할 일 수 / 전체 오늘 할 일 수 × 100
```

습관은 별도 달성률로 표시하며 전체 진행률 포함 여부는 설정 가능하도록 한다.

---

## 6.3 캘린더

### 보기 유형

- 월간 보기
- 주간 보기
- 일간 보기
- 일정 목록 보기

### 일정 필드

- 제목
- 설명
- 시작 일시
- 종료 일시
- 종일 여부
- 반복 여부
- 반복 규칙
- 카테고리
- 색상
- 위치
- 관련 링크
- 알림 시간
- 상태

### 기능

- 일정 생성
- 일정 수정
- 일정 삭제
- 반복 일정 생성
- 카테고리별 필터
- 날짜 이동
- 오늘로 이동
- 월·주·일 보기 전환
- 일정과 할 일 통합 표시
- 겹치는 일정 시각적 구분

### 반복 규칙

- 매일
- 평일
- 매주
- 매월
- 매년
- 사용자 지정

### 일정 상태

- 예정
- 진행 중
- 완료
- 취소

---

## 6.4 할 일 관리

### 할 일 필드

- 제목
- 상세 내용
- 마감일
- 시작 시간
- 종료 시간
- 우선순위
- 상태
- 카테고리
- 태그
- 반복 규칙
- 예상 소요 시간
- 실제 소요 시간
- 목표 연결
- 하위 할 일
- 첨부 링크
- 생성일
- 완료일

### 상태

- 미시작
- 진행 중
- 완료
- 보류
- 취소

### 우선순위

- 긴급
- 높음
- 보통
- 낮음
- 없음

### 기능

- 할 일 생성
- 수정
- 삭제
- 완료 처리
- 다중 선택
- 일괄 상태 변경
- 오늘로 이동
- 다음 날로 이동
- 하위 할 일 관리
- 반복 할 일 생성
- 카테고리 및 태그 필터
- 정렬
  - 마감일
  - 우선순위
  - 생성일
  - 사용자 지정
- 검색
- 완료 항목 숨김

---

## 6.5 목표 관리

### 목표 유형

- 횟수형
- 수치형
- 체크리스트형
- 기간형

### 목표 필드

- 목표명
- 설명
- 시작일
- 종료일
- 목표 유형
- 목표 수치
- 현재 수치
- 단위
- 색상
- 상태
- 연결된 할 일
- 메모

### 상태

- 진행 전
- 진행 중
- 완료
- 중단
- 보관

### 기능

- 목표 생성
- 목표 수정
- 목표 삭제
- 진행률 표시
- 하위 목표 생성
- 할 일 연결
- 목표 수동 업데이트
- 목표 완료 처리
- 목표 기간 연장
- 완료 목표 보관

---

## 6.6 습관 관리

### 습관 필드

- 습관명
- 설명
- 아이콘
- 색상
- 시작일
- 종료일
- 반복 요일
- 목표 빈도
- 알림 시간
- 활성 상태

### 기능

- 습관 생성
- 오늘 수행 체크
- 체크 취소
- 연속 수행 일수 계산
- 주간 달성률 표시
- 월간 달력 기록
- 습관 일시 중지
- 습관 종료
- 기록 수정

### 통계

- 현재 연속 일수
- 최장 연속 일수
- 최근 7일 달성률
- 최근 30일 달성률
- 전체 수행 횟수

---

## 6.7 메모

### 메모 필드

- 제목
- 본문
- 태그
- 즐겨찾기
- 보관 여부
- 생성일
- 수정일

### 기능

- 메모 생성
- 자동 저장
- 수정
- 삭제
- 즐겨찾기
- 보관
- 검색
- 태그 필터
- Markdown 입력 지원
- 일정, 할 일, 목표와 연결

---

## 6.8 통계

### 제공 지표

- 할 일 완료율
- 계획 대비 완료 건수
- 우선순위별 완료율
- 카테고리별 완료 건수
- 습관 달성률
- 목표 진행률
- 가장 생산적인 요일
- 미완료 이월 건수
- 주간 연속 사용 일수

### 기간

- 오늘
- 최근 7일
- 이번 주
- 이번 달
- 사용자 지정 기간

### 차트

- 완료율 도넛 차트
- 요일별 완료 건수 막대 차트
- 습관 달성 히트맵
- 목표 진행률 프로그레스 바
- 카테고리별 비율 차트

---

## 6.9 검색

### 검색 대상

- 할 일 제목 및 내용
- 일정 제목 및 설명
- 목표명
- 메모 제목 및 본문
- 태그
- 카테고리

### 기능

- 통합 검색
- 검색 결과 유형 필터
- 날짜 필터
- 상태 필터
- 최근 검색어
- 검색어 하이라이트

---

## 6.10 설정

### 프로필

- 이름
- 프로필 이미지
- 이메일
- 시간대
- 언어

### 화면 설정

- 라이트 모드
- 다크 모드
- 시스템 설정
- 주 시작 요일
- 기본 캘린더 보기
- 시간 표시 방식
- 대시보드 위젯 설정

### 알림 설정

- 브라우저 알림
- 이메일 알림
- 일정 사전 알림
- 할 일 마감 알림
- 습관 알림
- 주간 리포트

### 데이터 관리

- 데이터 내보내기
- 데이터 가져오기
- 전체 데이터 삭제
- 회원 탈퇴

---

## 7. 화면 정의

## 7.1 랜딩 페이지

### 목적

서비스 가치 전달 및 회원가입 유도

### 구성

1. 헤더
   - 로고
   - 기능 소개
   - 로그인
   - 무료로 시작하기
2. 히어로 영역
   - 메인 카피
   - 서브 카피
   - CTA
   - 서비스 화면 이미지
3. 핵심 기능
4. 사용 방법
5. 주요 장점
6. FAQ
7. 푸터

### 메인 카피 예시

> 오늘의 계획부터 장기 목표까지, 한곳에서 관리하세요.

---

## 7.2 로그인 페이지

### 구성

- 이메일
- 비밀번호
- 로그인 버튼
- Google 로그인
- 비밀번호 찾기
- 회원가입 링크

### 유효성 검사

- 이메일 형식 검사
- 비밀번호 필수 입력
- 로그인 실패 메시지
- 이메일 인증 여부 확인

---

## 7.3 회원가입 페이지

### 구성

- 이름
- 이메일
- 비밀번호
- 비밀번호 확인
- 이용약관 동의
- 개인정보처리방침 동의
- 회원가입 버튼
- 소셜 회원가입

---

## 7.4 온보딩

### 단계

1. 사용자 이름 설정
2. 시간대 선택
3. 주 시작 요일 선택
4. 주요 사용 목적 선택
5. 기본 카테고리 선택
6. 첫 할 일 등록

### 기본 카테고리

- 업무
- 개인
- 공부
- 건강
- 일정
- 기타

---

## 7.5 앱 공통 레이아웃

### 데스크톱

- 좌측 사이드바
- 상단 헤더
- 중앙 콘텐츠
- 우측 상세 패널 선택 적용

### 모바일

- 상단 헤더
- 하단 탭 메뉴
- 플로팅 추가 버튼
- 상세 화면 전체 페이지 전환

### 사이드바 메뉴

- 오늘
- 캘린더
- 할 일
- 목표
- 습관
- 메모
- 통계
- 설정

### 공통 헤더

- 현재 페이지명
- 통합 검색
- 빠른 추가
- 알림
- 프로필

---

## 7.6 오늘 화면

### 영역

1. 날짜 및 인사말
2. 오늘 진행률
3. 오늘 일정 타임라인
4. 할 일 목록
5. 습관 목록
6. 진행 중인 목표
7. 빠른 메모

### 빈 화면

- 오늘 일정이 없습니다.
- 오늘 할 일을 추가해보세요.
- 첫 습관을 만들어보세요.

---

## 7.7 캘린더 화면

### 영역

- 보기 전환
- 이전·다음 날짜
- 오늘 버튼
- 카테고리 필터
- 캘린더 본문
- 일정 등록 모달
- 일정 상세 패널

---

## 7.8 할 일 화면

### 영역

- 상태 탭
- 검색
- 필터
- 정렬
- 할 일 목록
- 할 일 생성
- 할 일 상세 패널
- 다중 선택 액션 바

---

## 7.9 목표 화면

### 영역

- 목표 요약
- 진행 중 목표
- 완료 목표
- 목표 카드
- 목표 상세
- 관련 할 일 목록

---

## 7.10 습관 화면

### 영역

- 오늘의 습관
- 주간 기록
- 월간 히트맵
- 연속 수행 정보
- 습관별 통계

---

## 7.11 메모 화면

### 영역

- 메모 목록
- 메모 편집기
- 검색
- 태그 필터
- 즐겨찾기
- 보관함

---

## 7.12 통계 화면

### 영역

- 기간 선택
- 완료율 요약
- 할 일 분석
- 습관 분석
- 목표 분석
- 카테고리 분석

---

## 8. UI/UX 가이드

### 8.1 디자인 방향

- 미니멀
- 직관적
- 낮은 학습 비용
- 카드 기반 레이아웃
- 충분한 여백
- 색상보다 정보 구조 우선
- 완료 상태를 명확하게 표현
- 모바일 터치 영역 최소 44px 확보

### 8.2 권장 디자인 시스템

- UI 라이브러리: shadcn/ui
- 스타일링: Tailwind CSS
- 아이콘: Lucide React
- 폼: React Hook Form
- 유효성 검사: Zod
- 차트: Recharts
- 날짜 처리: date-fns
- 캘린더: FullCalendar 또는 직접 구현

### 8.3 브레이크포인트

| 구분 | 기준 |
|---|---|
| Mobile | 0~767px |
| Tablet | 768~1023px |
| Desktop | 1024px 이상 |

### 8.4 접근성

- 키보드 탐색 지원
- 포커스 상태 표시
- 텍스트 대비 WCAG AA 이상
- 버튼에 접근 가능한 이름 제공
- 색상만으로 상태를 구분하지 않음
- 폼 오류 메시지를 입력 필드와 연결

---

## 9. 기술 아키텍처

## 9.1 기술 구성

| 영역 | 기술 |
|---|---|
| 프론트엔드 | React |
| 웹 프레임워크 | Next.js |
| 언어 | TypeScript |
| 스타일 | Tailwind CSS |
| UI 컴포넌트 | shadcn/ui |
| 서버 로직 | Next.js Route Handlers / Server Actions |
| 데이터베이스 | Supabase PostgreSQL |
| 인증 | Supabase Auth |
| 스토리지 | Supabase Storage |
| 실시간 기능 | Supabase Realtime 선택 적용 |
| 배포 | Vercel |
| 상태 관리 | Zustand 또는 React Context |
| 서버 상태 | TanStack Query 선택 적용 |
| 폼 | React Hook Form + Zod |
| 테스트 | Vitest / Playwright |

> Next.js는 React 기반 프레임워크이므로 프론트엔드와 백엔드 API를 하나의 프로젝트에서 구성한다.

## 9.2 권장 구조

```text
Browser
  ↓
Next.js App Router
  ├─ React Server Components
  ├─ Client Components
  ├─ Server Actions
  ├─ Route Handlers
  └─ Middleware
       ↓
Supabase
  ├─ Auth
  ├─ PostgreSQL
  ├─ Storage
  └─ Realtime
```

## 9.3 렌더링 원칙

- 랜딩 페이지: SSR 또는 SSG
- 앱 내부 페이지: Server Component 우선
- 사용자 상호작용: Client Component
- 데이터 변경: Server Actions 우선
- 외부 연동 API: Route Handlers
- 인증 세션 확인: Middleware 및 서버 측 검증

---

## 10. 프로젝트 디렉터리 구조

```text
src/
├─ app/
│  ├─ (public)/
│  │  ├─ page.tsx
│  │  ├─ login/
│  │  └─ signup/
│  ├─ (app)/
│  │  ├─ layout.tsx
│  │  ├─ today/
│  │  ├─ calendar/
│  │  ├─ tasks/
│  │  ├─ goals/
│  │  ├─ habits/
│  │  ├─ notes/
│  │  ├─ analytics/
│  │  └─ settings/
│  ├─ api/
│  ├─ auth/
│  │  └─ callback/
│  ├─ layout.tsx
│  └─ globals.css
├─ components/
│  ├─ common/
│  ├─ layout/
│  ├─ tasks/
│  ├─ calendar/
│  ├─ goals/
│  ├─ habits/
│  ├─ notes/
│  └─ ui/
├─ actions/
├─ hooks/
├─ lib/
│  ├─ supabase/
│  ├─ validations/
│  ├─ constants/
│  └─ utils/
├─ services/
├─ stores/
├─ types/
└─ middleware.ts
```

---

## 11. 데이터베이스 설계

## 11.1 관계 개요

```text
auth.users
  └─ profiles
      ├─ categories
      ├─ tags
      ├─ tasks
      ├─ events
      ├─ goals
      ├─ habits
      ├─ habit_logs
      ├─ notes
      └─ user_settings
```

## 11.2 profiles

| 컬럼 | 타입 | 설명 |
|---|---|---|
| id | uuid | auth.users.id |
| display_name | text | 사용자명 |
| avatar_url | text | 프로필 이미지 |
| timezone | text | 사용자 시간대 |
| locale | text | 언어 |
| created_at | timestamptz | 생성일 |
| updated_at | timestamptz | 수정일 |

## 11.3 categories

| 컬럼 | 타입 | 설명 |
|---|---|---|
| id | uuid | PK |
| user_id | uuid | 사용자 ID |
| name | text | 카테고리명 |
| color | text | 색상 |
| icon | text | 아이콘 |
| sort_order | integer | 정렬 순서 |
| created_at | timestamptz | 생성일 |

## 11.4 tags

| 컬럼 | 타입 | 설명 |
|---|---|---|
| id | uuid | PK |
| user_id | uuid | 사용자 ID |
| name | text | 태그명 |
| color | text | 색상 |
| created_at | timestamptz | 생성일 |

## 11.5 tasks

| 컬럼 | 타입 | 설명 |
|---|---|---|
| id | uuid | PK |
| user_id | uuid | 사용자 ID |
| category_id | uuid | 카테고리 |
| goal_id | uuid | 연결 목표 |
| parent_task_id | uuid | 상위 할 일 |
| title | text | 제목 |
| description | text | 상세 내용 |
| status | text | 상태 |
| priority | text | 우선순위 |
| due_date | date | 마감일 |
| start_at | timestamptz | 시작 일시 |
| end_at | timestamptz | 종료 일시 |
| estimated_minutes | integer | 예상 소요 시간 |
| actual_minutes | integer | 실제 소요 시간 |
| recurrence_rule | text | 반복 규칙 |
| completed_at | timestamptz | 완료일 |
| sort_order | integer | 정렬 순서 |
| created_at | timestamptz | 생성일 |
| updated_at | timestamptz | 수정일 |
| deleted_at | timestamptz | 소프트 삭제 |

## 11.6 task_tags

| 컬럼 | 타입 | 설명 |
|---|---|---|
| task_id | uuid | 할 일 ID |
| tag_id | uuid | 태그 ID |

## 11.7 events

| 컬럼 | 타입 | 설명 |
|---|---|---|
| id | uuid | PK |
| user_id | uuid | 사용자 ID |
| category_id | uuid | 카테고리 |
| title | text | 제목 |
| description | text | 설명 |
| location | text | 장소 |
| link_url | text | 관련 링크 |
| start_at | timestamptz | 시작 일시 |
| end_at | timestamptz | 종료 일시 |
| all_day | boolean | 종일 여부 |
| status | text | 상태 |
| recurrence_rule | text | 반복 규칙 |
| reminder_minutes | integer | 사전 알림 |
| created_at | timestamptz | 생성일 |
| updated_at | timestamptz | 수정일 |
| deleted_at | timestamptz | 소프트 삭제 |

## 11.8 goals

| 컬럼 | 타입 | 설명 |
|---|---|---|
| id | uuid | PK |
| user_id | uuid | 사용자 ID |
| parent_goal_id | uuid | 상위 목표 |
| title | text | 목표명 |
| description | text | 설명 |
| goal_type | text | 목표 유형 |
| status | text | 상태 |
| start_date | date | 시작일 |
| end_date | date | 종료일 |
| target_value | numeric | 목표값 |
| current_value | numeric | 현재값 |
| unit | text | 단위 |
| color | text | 색상 |
| created_at | timestamptz | 생성일 |
| updated_at | timestamptz | 수정일 |
| deleted_at | timestamptz | 소프트 삭제 |

## 11.9 habits

| 컬럼 | 타입 | 설명 |
|---|---|---|
| id | uuid | PK |
| user_id | uuid | 사용자 ID |
| name | text | 습관명 |
| description | text | 설명 |
| icon | text | 아이콘 |
| color | text | 색상 |
| start_date | date | 시작일 |
| end_date | date | 종료일 |
| repeat_days | integer[] | 반복 요일 |
| target_count | integer | 목표 횟수 |
| reminder_time | time | 알림 시간 |
| is_active | boolean | 활성 여부 |
| created_at | timestamptz | 생성일 |
| updated_at | timestamptz | 수정일 |

## 11.10 habit_logs

| 컬럼 | 타입 | 설명 |
|---|---|---|
| id | uuid | PK |
| user_id | uuid | 사용자 ID |
| habit_id | uuid | 습관 ID |
| log_date | date | 수행일 |
| count | integer | 수행 횟수 |
| note | text | 기록 메모 |
| completed_at | timestamptz | 완료 시간 |
| created_at | timestamptz | 생성일 |

### 제약 조건

```text
UNIQUE(habit_id, log_date)
```

## 11.11 notes

| 컬럼 | 타입 | 설명 |
|---|---|---|
| id | uuid | PK |
| user_id | uuid | 사용자 ID |
| title | text | 제목 |
| content | text | 본문 |
| is_favorite | boolean | 즐겨찾기 |
| is_archived | boolean | 보관 |
| linked_type | text | 연결 유형 |
| linked_id | uuid | 연결 대상 ID |
| created_at | timestamptz | 생성일 |
| updated_at | timestamptz | 수정일 |
| deleted_at | timestamptz | 소프트 삭제 |

## 11.12 note_tags

| 컬럼 | 타입 | 설명 |
|---|---|---|
| note_id | uuid | 메모 ID |
| tag_id | uuid | 태그 ID |

## 11.13 user_settings

| 컬럼 | 타입 | 설명 |
|---|---|---|
| user_id | uuid | PK |
| theme | text | 테마 |
| week_start_day | integer | 주 시작 요일 |
| default_calendar_view | text | 기본 캘린더 |
| time_format | text | 시간 표시 |
| dashboard_widgets | jsonb | 위젯 설정 |
| notification_settings | jsonb | 알림 설정 |
| created_at | timestamptz | 생성일 |
| updated_at | timestamptz | 수정일 |

---

## 12. 데이터베이스 정책

### 12.1 RLS 원칙

모든 사용자 데이터 테이블에 Row Level Security를 활성화한다.

### SELECT 정책 예시

```sql
create policy "Users can view own tasks"
on public.tasks
for select
using (auth.uid() = user_id);
```

### INSERT 정책 예시

```sql
create policy "Users can create own tasks"
on public.tasks
for insert
with check (auth.uid() = user_id);
```

### UPDATE 정책 예시

```sql
create policy "Users can update own tasks"
on public.tasks
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
```

### DELETE 정책 예시

```sql
create policy "Users can delete own tasks"
on public.tasks
for delete
using (auth.uid() = user_id);
```

### 12.2 인덱스

다음 컬럼에 인덱스를 생성한다.

- tasks.user_id
- tasks.due_date
- tasks.status
- tasks.category_id
- events.user_id
- events.start_at
- events.end_at
- goals.user_id
- goals.status
- habits.user_id
- habit_logs.habit_id
- habit_logs.log_date
- notes.user_id
- notes.updated_at

### 12.3 삭제 정책

- 기본 삭제는 소프트 삭제를 사용한다.
- deleted_at 값이 있는 데이터는 일반 조회에서 제외한다.
- 휴지통 데이터는 30일 후 영구 삭제할 수 있다.
- 사용자 탈퇴 시 관련 데이터 처리 정책을 별도로 적용한다.

---

## 13. API 및 서버 액션

## 13.1 인증

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | /auth/signup | 회원가입 |
| POST | /auth/login | 로그인 |
| POST | /auth/logout | 로그아웃 |
| POST | /auth/reset-password | 비밀번호 재설정 |
| GET | /auth/callback | OAuth 콜백 |

Supabase Auth SDK를 우선 사용하며 별도 API가 필요하지 않은 기능은 SDK로 처리한다.

## 13.2 할 일

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | /api/tasks | 할 일 목록 |
| POST | /api/tasks | 할 일 생성 |
| GET | /api/tasks/:id | 할 일 상세 |
| PATCH | /api/tasks/:id | 할 일 수정 |
| DELETE | /api/tasks/:id | 할 일 삭제 |
| POST | /api/tasks/:id/complete | 완료 처리 |
| POST | /api/tasks/bulk | 일괄 처리 |

## 13.3 일정

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | /api/events | 일정 목록 |
| POST | /api/events | 일정 생성 |
| GET | /api/events/:id | 일정 상세 |
| PATCH | /api/events/:id | 일정 수정 |
| DELETE | /api/events/:id | 일정 삭제 |

## 13.4 목표

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | /api/goals | 목표 목록 |
| POST | /api/goals | 목표 생성 |
| GET | /api/goals/:id | 목표 상세 |
| PATCH | /api/goals/:id | 목표 수정 |
| DELETE | /api/goals/:id | 목표 삭제 |

## 13.5 습관

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | /api/habits | 습관 목록 |
| POST | /api/habits | 습관 생성 |
| PATCH | /api/habits/:id | 습관 수정 |
| DELETE | /api/habits/:id | 습관 삭제 |
| POST | /api/habits/:id/check | 수행 기록 |
| DELETE | /api/habits/:id/check | 수행 취소 |

## 13.6 메모

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | /api/notes | 메모 목록 |
| POST | /api/notes | 메모 생성 |
| GET | /api/notes/:id | 메모 상세 |
| PATCH | /api/notes/:id | 메모 수정 |
| DELETE | /api/notes/:id | 메모 삭제 |

## 13.7 통계

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | /api/analytics/summary | 요약 통계 |
| GET | /api/analytics/tasks | 할 일 통계 |
| GET | /api/analytics/habits | 습관 통계 |
| GET | /api/analytics/goals | 목표 통계 |

---

## 14. 상태 관리

### 서버 상태

- Supabase 조회 결과
- 할 일 목록
- 일정 목록
- 목표 목록
- 습관 기록
- 통계 데이터

TanStack Query 또는 Server Component 기반 데이터 패칭을 사용한다.

### 클라이언트 상태

- 사이드바 열림 상태
- 모달 상태
- 선택된 날짜
- 캘린더 보기 방식
- 임시 필터
- 드래그 상태

Zustand 또는 React Context를 사용한다.

### 원칙

- 영구 데이터는 전역 상태에 중복 저장하지 않는다.
- URL로 표현 가능한 필터는 검색 파라미터로 관리한다.
- 서버 데이터는 캐시 무효화 전략을 명확하게 정의한다.

---

## 15. 유효성 검사

### 할 일

- 제목: 필수, 최대 200자
- 상세 내용: 최대 5,000자
- 종료 시간은 시작 시간 이후
- 예상 소요 시간은 0 이상
- 마감일은 유효한 날짜

### 일정

- 제목: 필수, 최대 200자
- 종료 일시는 시작 일시 이후
- 반복 종료일은 시작일 이후
- URL은 유효한 형식

### 목표

- 목표명: 필수, 최대 200자
- 종료일은 시작일 이후
- 목표 수치는 0보다 커야 함
- 현재 수치는 0 이상

### 습관

- 습관명: 필수, 최대 100자
- 반복 요일 최소 1개
- 목표 횟수 1 이상

---

## 16. 알림 정책

### MVP

- 앱 내부 알림
- 마감 임박 표시
- 오늘 일정 표시
- 습관 미완료 표시

### 2차 개발

- 브라우저 Push API
- 이메일 알림
- 일정 시작 전 알림
- 할 일 마감 전 알림
- 주간 요약 리포트

### 알림 상태

- 읽지 않음
- 읽음
- 보관

---

## 17. 보안

- Supabase RLS 필수 적용
- 서비스 Role Key를 브라우저에 노출하지 않음
- 서버 환경 변수로 비밀키 관리
- 사용자 입력값 검증
- Markdown 렌더링 시 XSS 방지
- 파일 업로드 확장자 및 크기 제한
- 인증된 사용자만 내부 라우트 접근
- CSRF 및 세션 보안 정책 적용
- API 요청 빈도 제한 검토
- 중요 작업 재인증 검토
- 개인정보 최소 수집

### 환경 변수 예시

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=
```

---

## 18. 성능 기준

### 목표

- 주요 페이지 LCP 2.5초 이내
- 사용자 액션 응답 500ms 이내 체감
- 초기 JavaScript 번들 최소화
- 모바일 환경 우선 최적화

### 적용 방안

- Server Component 우선
- 동적 import
- 이미지 최적화
- 필요한 데이터만 조회
- 페이지네이션 또는 무한 스크롤
- Supabase 인덱스 적용
- 통계 쿼리 RPC 또는 View 활용
- 검색 입력 debounce
- 낙관적 UI 적용

---

## 19. 에러 처리

### 공통 원칙

- 사용자에게 기술적인 오류 메시지를 그대로 노출하지 않는다.
- 저장 실패 시 입력값을 유지한다.
- 재시도 버튼을 제공한다.
- 네트워크 오류와 권한 오류를 구분한다.
- 오류 로그는 서버 측에서 기록한다.

### 메시지 예시

- 저장하지 못했습니다. 잠시 후 다시 시도해주세요.
- 로그인 세션이 만료되었습니다. 다시 로그인해주세요.
- 해당 항목을 찾을 수 없습니다.
- 접근 권한이 없습니다.
- 네트워크 연결을 확인해주세요.

---

## 20. 분석 이벤트

### 권장 도구

- Vercel Analytics
- PostHog
- Google Analytics 선택 적용

### 주요 이벤트

| 이벤트 | 설명 |
|---|---|
| sign_up_completed | 회원가입 완료 |
| onboarding_completed | 온보딩 완료 |
| task_created | 할 일 생성 |
| task_completed | 할 일 완료 |
| event_created | 일정 생성 |
| goal_created | 목표 생성 |
| habit_checked | 습관 체크 |
| note_created | 메모 생성 |
| dashboard_viewed | 오늘 화면 조회 |
| weekly_report_viewed | 주간 통계 조회 |

### 핵심 지표

- 가입 완료율
- 온보딩 완료율
- 첫 할 일 생성률
- 일간 활성 사용자
- 주간 활성 사용자
- 7일 재방문율
- 사용자당 주간 완료 할 일 수
- 습관 체크 사용자 비율

---

## 21. 테스트 계획

### 단위 테스트

- 날짜 계산
- 반복 일정 계산
- 목표 진행률 계산
- 습관 연속 일수 계산
- 유효성 검사
- 권한 확인 함수

### 통합 테스트

- 회원가입 후 프로필 생성
- 할 일 생성 및 완료
- 일정 생성 및 수정
- 습관 체크
- 목표와 할 일 연결
- 사용자별 데이터 격리

### E2E 테스트

1. 회원가입
2. 로그인
3. 온보딩
4. 할 일 생성
5. 할 일 완료
6. 일정 생성
7. 습관 생성 및 체크
8. 목표 생성
9. 로그아웃
10. 재로그인 후 데이터 유지 확인

### 브라우저

- Chrome 최신
- Safari 최신
- Edge 최신
- 모바일 Safari
- 모바일 Chrome

---

## 22. 개발 일정 예시

### 전체 기간

MVP 기준 약 8주

| 주차 | 작업 |
|---|---|
| 1주차 | 요구사항 확정, IA, 와이어프레임, DB 설계 |
| 2주차 | 프로젝트 설정, 인증, 공통 레이아웃 |
| 3주차 | 할 일 기능 |
| 4주차 | 캘린더 및 일정 기능 |
| 5주차 | 목표 및 습관 기능 |
| 6주차 | 메모, 검색, 설정 |
| 7주차 | 통계, 반응형, 접근성 |
| 8주차 | QA, 버그 수정, 배포 |

### 역할별 산출물

#### 기획

- 요구사항 정의서
- 화면 정의서
- 정책서
- 테스트 시나리오

#### 디자인

- 디자인 시스템
- 반응형 화면
- 컴포넌트 가이드
- 프로토타입

#### 개발

- Next.js 프로젝트
- Supabase 스키마
- RLS 정책
- API 및 Server Actions
- 테스트 코드
- 배포 환경

---

## 23. MVP 우선순위

### Must

- 인증
- 오늘 대시보드
- 할 일 CRUD
- 일정 CRUD
- 캘린더
- 목표 CRUD
- 습관 CRUD 및 기록
- 메모 CRUD
- 사용자별 데이터 분리
- 반응형 웹

### Should

- 반복 일정
- 반복 할 일
- 태그
- 통합 검색
- 통계
- 다크모드
- 온보딩

### Could

- 드래그 앤 드롭
- 데이터 내보내기
- 브라우저 알림
- Google Calendar 연동
- PWA

### Won't

- 팀 협업
- 결제
- 네이티브 앱
- 실시간 공동 편집

---

## 24. 완료 기준

### 기능 완료 기준

- 사용자가 가입 및 로그인할 수 있다.
- 사용자별 데이터가 완전히 분리된다.
- 할 일, 일정, 목표, 습관, 메모를 생성·조회·수정·삭제할 수 있다.
- 오늘 화면에서 주요 정보를 확인할 수 있다.
- 모바일과 데스크톱에서 정상 동작한다.
- 새로고침 후에도 데이터가 유지된다.
- 주요 오류 상황에 대한 안내가 제공된다.

### 배포 완료 기준

- Production 환경 배포
- Supabase Production 프로젝트 연결
- 환경 변수 설정
- 도메인 연결
- HTTPS 적용
- 개인정보처리방침 및 이용약관 게시
- 기본 모니터링 적용
- 주요 E2E 테스트 통과

---

## 25. 향후 확장 방향

### AI 기능

- 자연어로 일정 및 할 일 생성
- 하루 일정 자동 배치
- 미완료 할 일 재배치
- 목표 달성을 위한 할 일 추천
- 주간 회고 자동 요약
- 생산성 패턴 분석

### 외부 연동

- Google Calendar
- Apple Calendar
- Outlook Calendar
- Slack
- Notion
- Todoist
- 이메일

### 서비스 확장

- 모바일 PWA
- 공유 플래너
- 가족 일정
- 팀 플래너
- 템플릿 마켓
- 프리미엄 구독

---

## 26. 개발 착수 체크리스트

- [ ] 서비스명 확정
- [ ] 브랜드 컬러 확정
- [ ] MVP 기능 확정
- [ ] 화면 IA 확정
- [ ] 와이어프레임 작성
- [ ] Supabase 프로젝트 생성
- [ ] 데이터베이스 스키마 작성
- [ ] RLS 정책 작성
- [ ] Next.js 프로젝트 생성
- [ ] 배포 환경 구성
- [ ] Git 저장소 생성
- [ ] 코딩 컨벤션 작성
- [ ] 디자인 시스템 정의
- [ ] 테스트 기준 정의
- [ ] 개인정보처리방침 작성
- [ ] 이용약관 작성

---

## 27. 권장 초기 개발 명령

```bash
npx create-next-app@latest planary \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

cd planary

npm install \
  @supabase/ssr \
  @supabase/supabase-js \
  @tanstack/react-query \
  react-hook-form \
  zod \
  @hookform/resolvers \
  zustand \
  date-fns \
  lucide-react \
  recharts

npx shadcn@latest init
```

---

## 28. 최종 권장사항

1. MVP에서는 기능 수보다 매일 빠르게 사용할 수 있는 경험에 집중한다.
2. 첫 화면은 오늘 일정과 할 일을 확인하는 데 최적화한다.
3. 사용자 데이터 보안은 애플리케이션 코드가 아닌 Supabase RLS에서 강제한다.
4. 반복 일정과 날짜 계산 로직은 초기부터 테스트 코드를 작성한다.
5. Next.js Server Component와 Server Actions를 우선 활용해 클라이언트 복잡도를 줄인다.
6. 통계 기능은 원본 데이터를 매번 모두 조회하지 않도록 View 또는 RPC를 검토한다.
7. 모바일 웹 사용 비중을 고려해 모든 핵심 액션을 한 손으로 수행할 수 있게 설계한다.
