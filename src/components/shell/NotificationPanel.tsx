'use client';

import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const NOTIFICATIONS = [
  { id: 1, user: 'movie_holic', body: '님이 회원님의 게시물을 좋아합니다.', time: '2시간' },
];

/** 원본 features/home/components/NotificationPanel.tsx — 오른쪽에서 전체를 덮는 패널 */
export default function NotificationPanel({ isVisible, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] bg-white pt-[var(--safe-top)] transition-transform duration-150 ease-out"
      style={{
        transform: `translateX(${isVisible ? 0 : 100}%)`,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
      aria-hidden={!isVisible}
    >
      <div className="flex items-center border-b border-gray-200 px-4 py-3">
        <button
          type="button"
          onClick={onClose}
          aria-label="알림 닫기"
          className="p-1 transition-opacity active:opacity-50"
          tabIndex={isVisible ? 0 : -1}
        >
          <ArrowLeft size={28} color="#262626" />
        </button>
        <h1 className="text-sub2-sb ml-4 text-gray-1000">알림</h1>
      </div>

      <div className="no-scrollbar h-[calc(100%-57px)] overflow-y-auto py-2">
        <h2 className="text-body2-sb mx-4 mb-4 mt-3 text-gray-1000">이번 주</h2>

        {NOTIFICATIONS.map((item) => (
          <button
            key={item.id}
            type="button"
            className="mb-5 flex w-full items-center px-4 text-left transition-colors hover:bg-gray-100"
          >
            {/* 원본 목데이터의 via.placeholder.com 은 서비스가 종료돼 회색 블록으로 대체 */}
            <div className="h-11 w-11 shrink-0 rounded-full bg-gray-400" />
            <p className="text-body2-r mx-3 flex-1 text-gray-1000">
              <span className="text-body2-sb">{item.user}</span>
              {item.body}
              <span className="text-gray-600"> {item.time}</span>
            </p>
            <div className="h-11 w-11 shrink-0 rounded-xs bg-gray-400" />
          </button>
        ))}
      </div>
    </div>
  );
}
