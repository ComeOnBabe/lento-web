'use client';

import { LogOut, Settings, Trash2, User, X } from 'lucide-react';
import { useEffect } from 'react';

const MENU = [
  { icon: User, label: '내가 쓴 글' },
  { icon: Trash2, label: '내 글 삭제' },
  { icon: Settings, label: '설정 및 기타' },
];

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

/** 원본 shared/components/Sidebar.tsx — 오른쪽에서 슬라이드되는 플로팅 드로어 */
export default function MenuDrawer({ isVisible, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100]"
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
      aria-hidden={!isVisible}
    >
      <button
        type="button"
        aria-label="닫기"
        onClick={onClose}
        className="absolute inset-0 transition-colors duration-200"
        style={{
          backgroundColor: isVisible ? 'rgba(0,0,0,0.25)' : 'transparent',
        }}
        tabIndex={isVisible ? 0 : -1}
      />

      <div
        className="absolute bottom-24 right-0 top-20 flex w-[260px] flex-col justify-between overflow-hidden rounded-l-3xl bg-white shadow-2xl transition-transform duration-[250ms] ease-out"
        style={{ transform: `translateX(${isVisible ? 0 : 100}%)` }}
      >
        <div className="px-6 pt-6">
          <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
            <span className="text-body1-sb text-gray-900">이상현 님</span>
            <button
              type="button"
              onClick={onClose}
              aria-label="사이드바 닫기"
              className="pl-4 transition-opacity active:opacity-50"
            >
              <X size={26} color="#262626" />
            </button>
          </div>

          <div className="flex flex-col gap-y-1">
            {MENU.map(({ icon: Icon, label }) => (
              <button
                key={label}
                type="button"
                className="flex items-center gap-4 py-4 transition-opacity active:opacity-50"
              >
                <Icon size={24} color="#262626" />
                <span className="text-body2-sb text-gray-900">{label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 border-t border-gray-100 px-6 pt-4">
          <button
            type="button"
            className="flex items-center gap-4 py-2 transition-opacity active:opacity-50"
          >
            <LogOut size={24} color="#ED4956" />
            <span className="text-body2-sb text-red-600">로그아웃</span>
          </button>
        </div>
      </div>
    </div>
  );
}
