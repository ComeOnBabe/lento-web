import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import { borderRadius, colors, typography } from './src/styles/design-tokens';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
      borderRadius,
      fontFamily: {
        pretendard: ['var(--font-pretendard)', 'Pretendard', 'sans-serif'],
      },
      spacing: {
        18: '72px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(26, 28, 32, 0.06), 0 1px 2px rgba(26, 28, 32, 0.04)',
        float: '0 8px 24px rgba(255, 89, 0, 0.28)',
      },
      keyframes: {
        'fab-in': {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        // 원본의 withSpring(damping 12, stiffness 150) 을 근사한 것
        'fab-in': 'fab-in 320ms cubic-bezier(0.34, 1.56, 0.64, 1) both',
      },
    },
  },
  plugins: [plugin(({ addUtilities }) => addUtilities(typography))],
} satisfies Config;
