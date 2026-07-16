import type { ReactNode } from 'react';

import BottomTabBar from './BottomTabBar';
import NavRail from './NavRail';

/**
 * 데스크톱: 좌측 고정 레일 + 넓은 콘텐츠 영역
 * 모바일: 하단 탭바 (원본 앱과 동일)
 */
export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-200">
      <NavRail />
      <div className="lg:pl-[240px]">
        <main className="mx-auto w-full max-w-[1080px] pb-[76px] lg:pb-0">
          {children}
        </main>
      </div>
      <BottomTabBar />
    </div>
  );
}
