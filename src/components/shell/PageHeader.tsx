'use client';

import { Menu } from 'lucide-react';
import { useState, type ReactNode } from 'react';

import MenuDrawer from './MenuDrawer';

interface Props {
  title: string;
  /** 제목 오른쪽에 붙는 부가 액션 (원본 DefaultHeader 에는 없는 슬롯) */
  action?: ReactNode;
}

/** 원본 shared/components/DefaultHeader.tsx */
export default function PageHeader({ title, action }: Props) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* pt-[--safe-top] — 폰 목업의 다이나믹 아일랜드 아래로 내용을 내린다 */}
      <header className="sticky top-0 z-30 border-b border-gray-200 bg-white pt-[var(--safe-top)]">
        <div className="flex h-14 items-center justify-between px-5">
          <h1 className="text-sub2-sb text-gray-900">{title}</h1>

          <div className="flex items-center gap-3">
            {action}
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="메뉴 열기"
              className="-mr-2 p-2 transition-opacity active:opacity-60"
            >
              <Menu size={23} color="#2A3038" />
            </button>
          </div>
        </div>
      </header>

      <MenuDrawer
        isVisible={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
