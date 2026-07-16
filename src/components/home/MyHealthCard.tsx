'use client';

import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

import HealthIcon from '@/assets/icons/ic_health.svg';
import HospitalIcon from '@/assets/icons/ic_hospital.svg';
import SlidingTab from '@/components/ui/SlidingTab';
import { LATEST_REPORT } from '@/mock/health';

import HealthGraph from './HealthGraph';

const TAB_MENUS = ['평균 비교', '지난 달 비교'];

/** 원본 features/home/components/MyHealthCard.tsx */
export default function MyHealthCard() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="rounded-2xl bg-white p-6 shadow-card">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HealthIcon width={24} height={24} />
          <h2 className="text-sub1-sb text-gray-900">나의 건강</h2>
        </div>
        <ChevronRight size={24} color="#9CA3AF" />
      </div>

      <SlidingTab
        tabs={TAB_MENUS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <p className="text-body2-m mb-1 text-gray-800">
        {LATEST_REPORT.summary.caution ? '주의 요소가 있어요' : '전반적으로 양호해요'}
      </p>
      <p className="text-body1-sb mb-1 text-gray-900">{LATEST_REPORT.headline}</p>
      <p className="text-body2-sb mb-1 text-gray-600">
        저번주보다 <span className="text-green-600">0.2°C 더 </span>높아요
      </p>

      <HealthGraph />

      <div className="mt-1 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <HospitalIcon />
          <span className="text-cap1-sb text-gray-600">
            {LATEST_REPORT.hospitalName} · {LATEST_REPORT.testDate}
          </span>
        </div>
        <button
          type="button"
          className="text-cap1-sb text-orange-600 transition-opacity active:opacity-60"
        >
          전체 기록
        </button>
      </div>
    </section>
  );
}
