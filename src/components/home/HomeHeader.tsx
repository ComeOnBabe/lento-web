'use client';

import { Bell, Menu, User } from 'lucide-react';
import { useEffect, useState } from 'react';

import MenuDrawer from '@/components/shell/MenuDrawer';
import NotificationPanel from '@/components/shell/NotificationPanel';
import { useScrollArea } from '@/components/shell/ScrollAreaContext';

const SCROLL_DISTANCE = 110;
const EXPANDED_HEIGHT = 180;
const COLLAPSED_HEIGHT = 64;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * 0~1 로 정규화된 스크롤 진행도. 원본의 interpolate(scrollY, [0, 110]) 과 같은 역할.
 * 앱이 폰 프레임 안에서 스크롤되므로 window 가 아니라 스크롤 영역을 본다.
 */
function useScrollProgress() {
  const scrollEl = useScrollArea();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const target: HTMLElement | Window = scrollEl ?? window;

    const onScroll = () => {
      const y = scrollEl ? scrollEl.scrollTop : window.scrollY;
      setProgress(Math.min(Math.max(y / SCROLL_DISTANCE, 0), 1));
    };

    onScroll();
    target.addEventListener('scroll', onScroll, { passive: true });
    return () => target.removeEventListener('scroll', onScroll);
  }, [scrollEl]);

  return progress;
}

/**
 * 원본 app/(app)/(tabs)/home.tsx 의 스크롤 연동 헤더.
 * 오렌지(#ff5900) → 흰색으로 바뀌며 180px → 64px 로 접힌다.
 * 원본처럼 상단 세이프에어리어(--safe-top)만큼 더 높고, 그만큼 안쪽을 띄운다.
 */
export default function HomeHeader({ username = '이상현' }: { username?: string }) {
  const p = useScrollProgress();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isNotiOpen, setNotiOpen] = useState(false);

  const radius = lerp(24, 0, p);
  const iconColor = p > 0.5 ? '#1F2937' : '#FFFFFF';

  return (
    <>
      <div
        className="sticky top-0 z-30 overflow-hidden px-5 pt-[var(--safe-top)]"
        style={{
          height: `calc(var(--safe-top) + ${lerp(EXPANDED_HEIGHT, COLLAPSED_HEIGHT, p)}px)`,
          backgroundColor: `rgb(255, ${lerp(89, 255, p)}, ${lerp(0, 255, p)})`,
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
          boxShadow: p >= 1 ? '0 1px 3px rgba(26,28,32,0.05)' : 'none',
        }}
      >
        <div
          className="mt-1 flex h-16 items-center justify-between pb-5"
          style={{
            borderBottom: '1px solid',
            borderBottomColor:
              p > 0.72 ? `rgba(220, 222, 227, ${(p - 0.72) / 0.28})` : 'transparent',
          }}
        >
          <div className="flex flex-1 items-center">
            <div className="flex h-[46px] w-[46px] items-center justify-center overflow-hidden rounded-full border border-gray-400 bg-gray-100">
              <User size={32} color="#E5E7EB" className="mt-2.5" fill="#E5E7EB" />
            </div>

            {/* 접혔을 때만 보이는 작은 텍스트 */}
            <div
              className="ml-3.5 transition-opacity"
              style={{
                opacity: Math.max((p - 0.5) * 2, 0),
                transform: `translateX(${lerp(-10, 0, Math.max((p - 0.5) * 2, 0))}px)`,
                pointerEvents: p > 0.5 ? 'auto' : 'none',
              }}
            >
              <p className="text-body2-r text-gray-600">2026년 1월 27일</p>
              <p className="text-body1-sb text-gray-900">사이클 5일차</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setNotiOpen(true)}
              aria-label="알림 열기"
            >
              <Bell size={24} color={iconColor} />
            </button>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="메뉴 열기"
            >
              <Menu size={24} color={iconColor} />
            </button>
          </div>
        </div>

        {/* 펼쳐졌을 때만 보이는 큰 인사말 */}
        <div
          className="mt-4"
          style={{
            opacity: Math.max(1 - p * 2, 0),
            transform: `translateY(${lerp(0, -20, p)}px)`,
            pointerEvents: p > 0.5 ? 'none' : 'auto',
          }}
        >
          <p className="text-sub2-m text-orange-200">{username}님,</p>
          <p className="text-head1-b mt-1 text-orange-200">
            사이클 <span className="text-gray-0">5일차</span>예요.
          </p>
        </div>
      </div>

      <MenuDrawer isVisible={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
      <NotificationPanel isVisible={isNotiOpen} onClose={() => setNotiOpen(false)} />
    </>
  );
}
