import type { Metadata, Viewport } from 'next';

import AppShell from '@/components/shell/AppShell';

import './globals.css';

export const metadata: Metadata = {
  title: 'Lento — 건강 관리',
  description: '내 몸의 사이클을 기록하고 AI 분석을 받아보는 건강 관리 서비스',
  icons: { icon: '/favicon.png' },
};

export const viewport: Viewport = {
  themeColor: '#ff5900',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
