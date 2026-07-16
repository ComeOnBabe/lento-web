'use client';

import { useState, type ReactNode } from 'react';

import BottomTabBar from './BottomTabBar';
import { ScrollAreaContext } from './ScrollAreaContext';

/**
 * 원본이 모바일 앱이라 웹에서도 폰 화면 그대로 보여준다.
 * - 모바일: 프레임 없이 화면을 꽉 채운다.
 * - 데스크톱(lg 이상): 어두운 배경 가운데에 390x844 폰 목업 프레임.
 *
 * 프레임에 transform 을 주면 내부 `position: fixed` 요소(탭바·모달·시트·드로어)가
 * 뷰포트가 아니라 프레임을 기준으로 잡히고, overflow-hidden 에 맞춰 잘린다.
 * 모바일에서는 transform 이 없어 fixed 가 곧 뷰포트이므로 결과가 같다.
 */
export default function AppShell({ children }: { children: ReactNode }) {
  const [scrollEl, setScrollEl] = useState<HTMLElement | null>(null);

  return (
    <div className="flex h-[100dvh] justify-center bg-gray-200 lg:items-center lg:bg-gray-1000 lg:py-6">
      <div className="relative h-full w-full overflow-hidden bg-gray-200 [--safe-top:0px] lg:h-[844px] lg:max-h-full lg:w-[390px] lg:rounded-[52px] lg:border-[12px] lg:border-gray-1000 lg:shadow-2xl lg:[--safe-top:44px] lg:[transform:translateZ(0)]">
        <div
          ref={setScrollEl}
          className="no-scrollbar h-full overflow-y-auto overscroll-contain"
        >
          <ScrollAreaContext.Provider value={scrollEl}>
            {children}
          </ScrollAreaContext.Provider>
        </div>

        <BottomTabBar />

        {/* 목업 장식 — 데스크톱에서만 */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-2 z-[300] hidden h-[30px] w-[104px] -translate-x-1/2 rounded-full bg-gray-1000 lg:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-2 left-1/2 z-[300] hidden h-[5px] w-[134px] -translate-x-1/2 rounded-full bg-gray-1000/70 lg:block"
        />
      </div>
    </div>
  );
}
