'use client';

import { useMemo, useState } from 'react';

import CheckListIcon from '@/assets/icons/ic_check_list.svg';
import ClockIcon from '@/assets/icons/ic_clock.svg';
import PlaceIcon from '@/assets/icons/ic_place.svg';
import SlidingTab from '@/components/ui/SlidingTab';
import { MOCK_SCHEDULES, SCHEDULE_TABS } from '@/mock/schedule';

/** 원본 features/home/components/UpcomingSchedule.tsx */
export default function UpcomingSchedule() {
  const [activeTab, setActiveTab] = useState(0);

  const filteredSchedules = useMemo(() => {
    if (activeTab === 1) return MOCK_SCHEDULES.filter((s) => s.owner === 'me');
    if (activeTab === 2) return MOCK_SCHEDULES.filter((s) => s.owner === 'spouse');
    return MOCK_SCHEDULES;
  }, [activeTab]);

  return (
    <section className="rounded-3xl border border-gray-100 bg-white p-5 shadow-card">
      <div className="mb-4 flex items-center">
        <CheckListIcon />
        <h2 className="text-sub1-sb ml-2 text-gray-1000">다가오는 일정</h2>
      </div>

      <SlidingTab
        tabs={SCHEDULE_TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="relative ml-2">
        {/* 타임라인 세로선 */}
        <div className="absolute bottom-6 left-[3px] top-2 w-px bg-gray-400" />

        {filteredSchedules.length === 0 && (
          <p className="text-body2-r py-6 text-gray-600">일정이 없어요</p>
        )}

        {filteredSchedules.map((item) => (
          <div key={item.id} className="relative mb-6 flex">
            <div className="absolute -left-px top-1.5 h-2 w-2 rounded-full bg-[#ff9400]" />

            <div className="ml-6 flex-1">
              <p className="text-body2-m mb-1 text-gray-700">{item.date}</p>
              <p className="text-body1-sb mb-1 text-gray-900">{item.title}</p>

              <div className="flex items-center">
                <ClockIcon />
                <span className="text-body2-sb ml-1 text-gray-600">{item.time}</span>

                <span className="text-cap1-r mx-2 text-gray-300">•</span>

                <PlaceIcon />
                <span className="text-body2-sb ml-1 text-gray-600">
                  {item.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
