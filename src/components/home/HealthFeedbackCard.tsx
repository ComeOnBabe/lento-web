'use client';

import { useState } from 'react';

import CalendarGrayIcon from '@/assets/icons/ic_calendar_gray.svg';
import FeedbackIcon from '@/assets/icons/ic_health_feedback.svg';
import ToggleSwitch from '@/components/ui/ToggleSwitch';
import { LATEST_REPORT } from '@/mock/health';

/** 원본 features/home/components/HealthFeedbackCard.tsx */
export default function HealthFeedbackCard() {
  const [isAlarmOn, setIsAlarmOn] = useState(false);

  return (
    <section className="flex flex-col rounded-3xl border border-gray-100 bg-white p-5 shadow-card">
      <div className="flex items-start justify-between">
        <FeedbackIcon />
        <ToggleSwitch
          label="알림 설정"
          isOn={isAlarmOn}
          onToggle={() => setIsAlarmOn(!isAlarmOn)}
        />
      </div>

      <h2 className="text-body1-sb mt-5 text-gray-800">건강 피드백</h2>

      <p className="text-body1-sb line-clamp-2 text-gray-900">
        {LATEST_REPORT.interpretation}
      </p>

      <div className="mt-3 flex items-center gap-1.5">
        <CalendarGrayIcon />
        <span className="text-cap1-sb text-gray-600">
          최근 기록 {LATEST_REPORT.testDate}
        </span>
      </div>

      <button
        type="button"
        className="text-body2-sb mt-5 w-full rounded-md bg-gray-200 py-3.5 text-gray-900 transition-colors hover:bg-gray-300"
      >
        전체 보기
      </button>
    </section>
  );
}
