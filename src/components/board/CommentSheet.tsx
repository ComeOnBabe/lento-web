'use client';

import { Heart } from 'lucide-react';
import { useEffect } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

/** 원본 FeedItem.tsx 안에 있던 댓글 바텀시트를 분리한 것 */
export default function CommentSheet({ isOpen, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[120]"
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        aria-label="닫기"
        onClick={onClose}
        className="absolute inset-0"
        tabIndex={isOpen ? 0 : -1}
      />

      <div
        className="absolute inset-x-0 bottom-0 flex h-[70%] flex-col rounded-t-3xl bg-white shadow-lg transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${isOpen ? 0 : 100}%)` }}
      >
        <div className="flex flex-col items-center border-b border-gray-100 py-3">
          <div className="mb-3 h-1 w-10 rounded-full bg-gray-500" />
          <h2 className="text-body1-sb text-gray-900">댓글</h2>
        </div>

        <div className="no-scrollbar flex-1 overflow-y-auto px-4 py-2">
          <div className="mb-5 mt-2 flex gap-3">
            <div className="h-8 w-8 shrink-0 rounded-full bg-gray-400" />
            <div className="flex-1">
              <p className="text-body2-sb mb-1 text-gray-900">
                random_user{' '}
                <span className="text-cap1-r text-gray-600">2시간 전</span>
              </p>
              <p className="text-body2-r text-gray-800">
                우와 정말 멋지네요! 영화 너무 기대됩니다. 👍
              </p>
              <button type="button" className="text-cap1-sb mt-1 text-gray-600">
                답글 달기
              </button>
            </div>
            <Heart size={16} color="gray" />
          </div>
        </div>

        <div className="flex items-center gap-3 border-t border-gray-200 bg-white px-4 py-3 pb-8">
          <div className="h-8 w-8 shrink-0 rounded-full bg-gray-400" />
          <input
            type="text"
            placeholder="댓글 달기..."
            className="text-body2-r flex-1 rounded-full bg-gray-100 px-4 py-2.5 text-gray-900 outline-none placeholder:text-gray-600"
          />
          <button type="button" className="text-body2-sb text-blue-500">
            게시
          </button>
        </div>
      </div>
    </div>
  );
}
