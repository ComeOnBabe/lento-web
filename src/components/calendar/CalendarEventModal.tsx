'use client';

import { Plus } from 'lucide-react';
import { useEffect } from 'react';

import type { CalendarEvent } from '@/mock/schedule';

interface Props {
  visible: boolean;
  onClose: () => void;
  dateString: string;
  events: CalendarEvent[];
  onAddPress: () => void;
}

const DAY_NAMES = ['일', '월', '화', '수', '목', '금', '토'];

function formatDate(dateStr: string) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return `${date.getMonth() + 1}월 ${date.getDate()}일 (${DAY_NAMES[date.getDay()]})`;
}

/** 원본 features/calendar/components/CalendarEventModal.tsx */
export default function CalendarEventModal({
  visible,
  onClose,
  dateString,
  events,
  onAddPress,
}: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={formatDate(dateString)}
      className="fixed inset-0 z-[150] flex animate-[fade-in_200ms_ease-out] items-center justify-center"
    >
      <button
        type="button"
        aria-label="닫기"
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />

      <div className="relative flex max-h-[75%] w-[88%] max-w-[420px] flex-col rounded-[32px] bg-white p-6 shadow-xl">
        <h2 className="text-head2-b mb-6 mt-2 text-gray-900">
          {formatDate(dateString)}
        </h2>

        <div className="no-scrollbar flex-1 overflow-y-auto">
          {events.length > 0 ? (
            events.map((event, index) => (
              <div
                key={index}
                className={`mb-3 w-full rounded-lg p-4 ${
                  event.type === 'hospital' ? 'bg-[#FFF0E6]' : 'bg-[#EAF2FE]'
                }`}
              >
                <p className="text-sub2-sb mb-1.5 truncate text-gray-900">
                  {event.text}
                </p>
                <p className="text-body2-m text-gray-600">
                  {event.category} • {event.time}
                </p>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center py-8">
              <p className="text-body1-m text-gray-600">등록된 일정이 없어요</p>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={onAddPress}
          className="mt-2 flex w-full items-center justify-center rounded-2xl border border-[#F26B30] bg-white py-4 transition-colors hover:bg-[#FFF0E6]"
        >
          <Plus size={20} color="#F26B30" />
          <span className="text-sub2-sb ml-1.5 text-[#F26B30]">일정 등록하기</span>
        </button>
      </div>
    </div>
  );
}
