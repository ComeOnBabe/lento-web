'use client';

import { useState } from 'react';

import PlusIcon from '@/assets/icons/ic_plus.svg';
import ConnectSpouseCard from '@/components/calendar/ConnectSpouseCard';
import UpcomingSchedule from '@/components/home/UpcomingSchedule';
import UserCalendar from '@/components/home/UserCalendar';
import PageHeader from '@/components/shell/PageHeader';
import FloatingButton from '@/components/ui/FloatingButton';

export default function CalendarPage() {
  // 원본 헤더는 '오늘'의 연/월을 보여주지만, 그러면 캘린더가 펼친 달과 어긋난다.
  // 웹에서는 헤더가 캘린더를 따라가도록 달 상태를 페이지가 들고 있는다.
  const [month, setMonth] = useState(new Date(2026, 1, 1));
  const title = `${month.getFullYear()}년 ${month.getMonth() + 1}월`;

  return (
    <div className="min-h-full bg-gray-200">
      <PageHeader title={title} />

      <div className="pb-tabbar flex flex-col gap-5 px-5 pt-6">
        <ConnectSpouseCard />
        <UserCalendar month={month} onMonthChange={setMonth} />
        <UpcomingSchedule />
      </div>

      <FloatingButton icon={<PlusIcon />} label="일정 등록하기" />
    </div>
  );
}
