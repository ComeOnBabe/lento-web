/**
 * lento-frontend/design_system.json 에서 가져온 디자인 토큰.
 * 원본 앱의 shared/types/tailwind.theme.js 와 동일한 값을 유지한다.
 *
 * 네이티브는 Pretendard-Bold 처럼 패밀리를 나눠 쓰지만
 * 웹 Pretendard 는 단일 패밀리 + font-weight 로 굵기를 표현한다.
 */

export const colors = {
  gray: {
    0: '#FFFFFF',
    100: '#F7F8F9',
    200: '#F3F4F5',
    300: '#EEEFF1',
    400: '#DCDEE3',
    500: '#D1D3D8',
    600: '#B0B3BA',
    700: '#868B94',
    800: '#555D6D',
    900: '#2A3038',
    1000: '#1A1C20',
  },
  orange: {
    100: '#ffeee5',
    200: '#ffdecc',
    300: '#ffbd99',
    400: '#ff9b66',
    500: '#ff7a33',
    600: '#ff5900',
    700: '#e65000',
    800: '#993500',
    900: '#662400',
  },
  blue: {
    100: '#e5f3ff',
    200: '#b3dbff',
    300: '#80c3ff',
    400: '#4dacff',
    500: '#1A94FF',
    600: '#007ae6',
    700: '#005fb3',
    800: '#004480',
    900: '#00294d',
  },
  green: {
    100: '#f2fbf7',
    200: '#cbefe1',
    300: '#a4e3cb',
    400: '#7dd7b4',
    500: '#55cb9e',
    600: '#38b686',
    700: '#2c8f69',
    800: '#20684c',
    900: '#144130',
  },
  red: {
    100: '#fff7f6',
    200: '#ffc7c3',
    300: '#ff9790',
    400: '#ff685d',
    500: '#ff382a',
    600: '#f61000',
    700: '#c30d00',
    800: '#900900',
    900: '#5d0600',
  },
  yellow: {
    100: '#fff7de',
    200: '#fdefb9',
    300: '#fbdc65',
    400: '#e9c647',
    500: '#d4ab28',
    600: '#c49725',
    700: '#9b7821',
    800: '#755b22',
    900: '#4f3e1f',
  },
};

export const borderRadius = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
};

const WEIGHT = { b: 700, sb: 600, m: 500, r: 400 } as const;

/** [fontSize, lineHeight] — 원본 디자인 시스템의 160% 라인하이트 계산 결과 */
const SCALE = {
  head1: ['32px', '51px'],
  head2: ['24px', '38px'],
  sub1: ['20px', '32px'],
  sub2: ['18px', '29px'],
  body1: ['16px', '26px'],
  body2: ['14px', '22px'],
  cap1: ['12px', '19px'],
  cap2: ['10px', '16px'],
} as const;

/** 원본에 존재하는 조합만 생성 (head/sub 은 굵은 쪽만 정의되어 있음) */
const VARIANTS: Record<keyof typeof SCALE, (keyof typeof WEIGHT)[]> = {
  head1: ['b', 'sb'],
  head2: ['b', 'sb'],
  sub1: ['sb', 'm'],
  sub2: ['sb', 'm'],
  body1: ['sb', 'm', 'r'],
  body2: ['sb', 'm', 'r'],
  cap1: ['sb', 'm', 'r'],
  cap2: ['sb', 'm', 'r'],
};

export const typography = Object.fromEntries(
  Object.entries(VARIANTS).flatMap(([name, weights]) =>
    weights.map((w) => {
      const [fontSize, lineHeight] = SCALE[name as keyof typeof SCALE];
      return [
        `.text-${name}-${w}`,
        {
          fontSize,
          lineHeight,
          letterSpacing: '-0.02em',
          fontFamily: 'var(--font-pretendard), Pretendard, sans-serif',
          fontWeight: `${WEIGHT[w]}`,
        },
      ];
    }),
  ),
);
