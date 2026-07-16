/** lento-frontend/features/home/components/UpcomingSchedule.tsx 및 UserCalendar.tsx 의 목데이터 */

export interface Schedule {
  id: string;
  date: string;
  title: string;
  time: string;
  location: string;
  owner: 'me' | 'spouse';
}

export const SCHEDULE_TABS = ['전체 일정', '내 일정', '배우자 일정'];

export const MOCK_SCHEDULES: Schedule[] = [
  {
    id: '1',
    date: '01/10(수)',
    title: '배란 초음파 검사',
    time: '14:30 ~ 15:00',
    location: '서울 병원',
    owner: 'me',
  },
  {
    id: '2',
    date: '01/12(금)',
    title: '호르몬 혈액 검사',
    time: '10:00 ~ 10:30',
    location: '서울 병원',
    owner: 'spouse',
  },
  {
    id: '3',
    date: '01/15(월)',
    title: '진료 상담',
    time: '16:00 ~ 16:30',
    location: '라온산부인과',
    owner: 'me',
  },
];

export type CalendarEventType = 'hospital' | 'pharmacy' | 'etc';

export interface CalendarEvent {
  type: CalendarEventType;
  text: string;
  category: string;
  time: string;
}

export const MOCK_EVENTS: Record<string, CalendarEvent[]> = {
  '2026-02-26': [
    { type: 'hospital', text: '초음파 검사', category: '병원 진료', time: '14:30' },
    { type: 'pharmacy', text: '약 수령', category: '약국', time: '17:30' },
  ],
  '2026-02-28': [
    { type: 'hospital', text: '정기 검진', category: '병원 진료', time: '10:00' },
  ],
};

export const EVENT_STYLE: Record<CalendarEventType, string> = {
  hospital: 'bg-[#FFF0E6]',
  pharmacy: 'bg-[#EAF2FE]',
  etc: 'bg-[#F1F3F5]',
};
