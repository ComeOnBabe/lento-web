'use client';

import { Menu } from 'lucide-react';
import { useState, type ReactNode } from 'react';

import MenuDrawer from './MenuDrawer';

interface Props {
  title: string;
  /** 제목 오른쪽에 붙는 부가 액션 (원본 DefaultHeader 에는 없는 슬롯) */
  action?: ReactNode;
}

/**
 * 원본 shared/components/DefaultHeader.tsx.
 * 데스크톱에서는 좌측 레일이 메뉴 역할을 하므로 햄버거 버튼을 숨긴다.
 */
export default function PageHeader({ title, action }: Props) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-gray-200 bg-white px-5">
        <h1 className="text-sub2-sb text-gray-900">{title}</h1>

        <div className="flex items-center gap-3">
          {action}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="메뉴 열기"
            className="-mr-2 p-2 transition-opacity active:opacity-60 lg:hidden"
          >
            <Menu size={23} color="#2A3038" />
          </button>
        </div>
      </header>

      <MenuDrawer
        isVisible={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
