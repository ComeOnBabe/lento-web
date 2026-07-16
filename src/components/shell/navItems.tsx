import {
  AiLineIcon,
  BoardIcon,
  CalendarTabIcon,
  HomeIcon,
} from './TabBarIcon';

/** 원본 app/(app)/(tabs)/_layout.tsx 의 탭 순서와 라벨을 그대로 따른다. */
export const NAV_ITEMS = [
  { href: '/home', label: '홈', Icon: HomeIcon },
  { href: '/board', label: '게시판', Icon: BoardIcon },
  { href: '/ailine', label: 'AI라인', Icon: AiLineIcon },
  { href: '/calendar', label: '캘린더', Icon: CalendarTabIcon },
] as const;

export const ACTIVE_TINT = '#ff5900';
export const INACTIVE_TINT = '#D1D5DB';
