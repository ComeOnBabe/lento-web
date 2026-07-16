# lento-web

`lento-frontend` (Expo/React Native) 의 디자인을 웹으로 옮긴 Next.js 앱.

```bash
npm run dev   # http://localhost:3000
```

## 스택

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3 · @svgr/webpack

## 구조

```
src/
  app/            홈 · 게시판 · AI라인 · 캘린더 4개 라우트 ( / → /home )
  components/
    shell/        내비게이션 (레일 / 탭바 / 드로어 / 알림 패널)
    home/  board/  ailine/  calendar/    화면별 컴포넌트
    ui/           SlidingTab · ToggleSwitch · CtaButton · FloatingButton
  mock/           원본 앱의 목데이터
  styles/         design_system.json 에서 가져온 토큰
  assets/icons/   원본 SVG 를 그대로 복사 (svgr 로 컴포넌트화)
```

## 디자인 토큰

`src/styles/design-tokens.ts` 가 원본 `design_system.json` / `shared/types/tailwind.theme.js` 의
값을 그대로 담고 있고, `tailwind.config.ts` 가 이를 테마로 확장한다.

- 색상: `gray 0~1000`, `orange/blue/green/red/yellow 100~900` (브랜드 오렌지 `#ff5900` = `orange-600`)
- 타이포: `text-head1-b` … `text-cap2-r` 유틸리티로 생성
- 라운드: `rounded-xs`(4) ~ `rounded-2xl`(24)

네이티브는 `Pretendard-Bold` 처럼 굵기별 패밀리를 쓰지만, 웹 Pretendard 는 단일 패밀리 +
`font-weight` 라 토큰 생성 시 매핑했다 (Bold 700 / SemiBold 600 / Medium 500 / Regular 400).

## 원본과 달라진 점

**레이아웃** — 원본이 모바일 앱이라 웹에서도 폰 화면 그대로 보여준다. 모바일에서는 프레임 없이
화면을 꽉 채우고, 데스크톱(lg 이상)에서는 어두운 배경 가운데에 390x844 폰 목업 프레임
(다이나믹 아일랜드 · 홈 인디케이터)을 띄운다. 내비게이션·카드 배치는 두 경우 모두 원본과 같다.

프레임에 `transform` 을 주면 내부의 `position: fixed` 요소(탭바 · 모달 · 시트 · 드로어)가
뷰포트가 아니라 프레임을 기준으로 잡히고 `overflow-hidden` 에 맞춰 잘린다. 모바일에서는
transform 이 없어 fixed 가 곧 뷰포트라 결과가 같다.

스크롤은 window 가 아니라 프레임 내부에서 일어나므로, 스크롤에 반응하는 홈 헤더는
`ScrollAreaContext` 로 그 요소를 받아 진행도를 계산한다. 상단 세이프에어리어는 `--safe-top`
CSS 변수로 두어(데스크톱 44px / 모바일 0) 원본의 `insets.top` 과 같은 역할을 한다.

**네이티브 전용 라이브러리 대체** — 웹에 대응물이 없어 같은 디자인/데이터로 다시 구현했다.

| 원본 | 웹 |
| --- | --- |
| `react-native-gifted-charts` | `HealthGraph` — SVG 곡선 (카디널 스플라인) |
| `react-native-calendars` | `UserCalendar` — 월 그리드 직접 구현 |
| `@gorhom/bottom-sheet` | `AnalysisMethodSheet` · `CommentSheet` |
| `react-native-reanimated` | CSS transition / keyframes |

**목 이미지** — 원본이 쓰던 `via.placeholder.com` 은 서비스가 종료돼 이미지가 전부 깨진다.
게시판 썸네일은 CSS 그라디언트로, 프로필/알림 썸네일은 회색 블록으로 대체했다.
`img_ai_line.png` 등 실제 에셋은 원본에서 그대로 복사해 쓴다.

**캘린더 달** — 원본은 헤더에 '오늘'의 연/월을 찍고 캘린더는 이번 달을 여는데, 목 일정이
2026년 2월에만 있어 실제로는 빈 캘린더가 보인다. 웹에서는 2026년 2월을 초기값으로 두고
헤더가 캘린더가 펼친 달을 따라가게 했다.

**AI라인 빈 상태** — 원본 `hasHistory` 는 토글 UI가 없어 빈 상태 디자인을 볼 수 없다.
헤더에 '빈 상태 보기' 스위치를 뒀다.

## 아직 안 옮긴 화면

로그인/회원가입 (`(auth)`), 건강 리포트 상세·등록·이력 (`health/*`), 일정 등록 (`addSchedule`),
구독 바텀시트. 4개 탭 화면만 우선 옮겼다.
