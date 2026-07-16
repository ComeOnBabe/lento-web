'use client';

import { useMemo, useState } from 'react';

import CalendarIcon from '@/assets/icons/ic_calendar.svg';
import CalendarEventModal from '@/components/calendar/CalendarEventModal';
import { EVENT_STYLE, MOCK_EVENTS } from '@/mock/schedule';

const DAY_NAMES_SHORT = ['일', '월', '화', '수', '목', '금', '토'];

/**
 * 목데이터가 2026년 2월 기준이라 그 달을 초기값으로 둔다.
 * (원본은 이번 달을 열지만, 그러면 일정이 하나도 없는 화면이 나온다.)
 * new Date() 를 초기값으로 쓰지 않으므로 정적 프리렌더와 클라이언트가 항상 일치한다.
 */
const INITIAL_MONTH = new Date(2026, 1, 1);

const toDateString = (year: number, month: number, day: number) =>
  `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

const Caret = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path
      d={direction === 'left' ? 'M11 2 L4 8 L11 14 Z' : 'M5 2 L12 8 L5 14 Z'}
      fill="#555D6D"
    />
  </svg>
);

interface Props {
  /** 캘린더 페이지처럼 바깥에서 달을 함께 표시할 때 쓰는 제어 모드 */
  month?: Date;
  onMonthChange?: (month: Date) => void;
}

/** 원본 features/home/components/UserCalendar.tsx (react-native-calendars → 직접 구현) */
export default function UserCalendar({ month: monthProp, onMonthChange }: Props) {
  const [monthState, setMonthState] = useState(INITIAL_MONTH);
  const [selectedDate, setSelectedDate] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const month = monthProp ?? monthState;
  const year = month.getFullYear();
  const monthIndex = month.getMonth();

  const cells = useMemo(() => {
    const firstWeekday = new Date(year, monthIndex, 1).getDay();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    // hideExtraDays={true} — 이전/다음 달 칸은 빈칸으로 둔다
    return [
      ...Array.from({ length: firstWeekday }, () => null),
      ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];
  }, [year, monthIndex]);

  const today = new Date();
  const isTodayVisible =
    today.getFullYear() === year && today.getMonth() === monthIndex;

  const shiftMonth = (delta: number) => {
    const next = new Date(year, monthIndex + delta, 1);
    setMonthState(next);
    onMonthChange?.(next);
  };

  const openDay = (day: number) => {
    setSelectedDate(toDateString(year, monthIndex, day));
    setModalOpen(true);
  };

  return (
    <section className="rounded-3xl border border-gray-100 bg-white p-5 shadow-card">
      <div className="mb-2 flex items-center">
        <CalendarIcon />
        <h2 className="text-sub1-sb ml-2 text-gray-1000">나의 캘린더</h2>
      </div>

      <div className="overflow-hidden pb-2">
        <div className="mb-3 flex items-center justify-center gap-6 py-2">
          <button type="button" onClick={() => shiftMonth(-1)} aria-label="이전 달">
            <Caret direction="left" />
          </button>
          <h3 className="text-sub2-sb border-b border-gray-800 pb-0.5 text-gray-900">
            {year}년 {monthIndex + 1}월
          </h3>
          <button type="button" onClick={() => shiftMonth(1)} aria-label="다음 달">
            <Caret direction="right" />
          </button>
        </div>

        <div className="grid grid-cols-7">
          {DAY_NAMES_SHORT.map((day) => (
            <div
              key={day}
              className="text-cap1-sb pb-2 text-center text-gray-1000"
            >
              {day}
            </div>
          ))}

          {cells.map((day, index) => {
            if (day === null) return <div key={`empty-${index}`} />;

            const dateString = toDateString(year, monthIndex, day);
            const events = MOCK_EVENTS[dateString] ?? [];
            const isToday = isTodayVisible && today.getDate() === day;

            return (
              <button
                key={dateString}
                type="button"
                onClick={() => openDay(day)}
                className="flex min-h-[80px] w-full flex-col items-center rounded-sm px-0.5 pt-1 transition-colors hover:bg-gray-100"
              >
                <span
                  className={`mb-1 text-base font-semibold ${
                    isToday ? 'text-orange-500' : 'text-gray-800'
                  }`}
                >
                  {day}
                </span>

                <span className="flex w-full flex-col items-center gap-1">
                  {events.map((event, i) => (
                    <span
                      key={i}
                      className={`w-full truncate rounded-xs px-1.5 py-0.5 text-[10px] font-medium text-gray-700 ${EVENT_STYLE[event.type]}`}
                    >
                      {event.text}
                    </span>
                  ))}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <CalendarEventModal
        visible={isModalOpen}
        onClose={() => setModalOpen(false)}
        dateString={selectedDate}
        events={MOCK_EVENTS[selectedDate] ?? []}
        onAddPress={() => setModalOpen(false)}
      />
    </section>
  );
}
