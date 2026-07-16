'use client';

import Image from 'next/image';
import { useState } from 'react';

import CheckIcon from '@/assets/icons/ic_check.svg';
import SparklesIcon from '@/assets/icons/ic_sparkles.svg';
import FloatingButton from '@/components/ui/FloatingButton';
import { MOCK_HISTORY } from '@/mock/ailine';

import AilineHistoryItem from './AilineHistoryItem';
import AnalysisMethodSheet from './AnalysisMethodSheet';

/** 원본 features/ailine/components/AilineHistoryView.tsx */
export default function AilineHistoryView() {
  const [filter, setFilter] = useState(false);
  const [isSheetOpen, setSheetOpen] = useState(false);

  const items = filter ? MOCK_HISTORY.filter((i) => i.prob >= 50) : MOCK_HISTORY;

  return (
    <div className="min-h-screen bg-gray-200 px-5 pt-6">
      {/* 1. 상단 안내 배너 */}
      <div className="mb-8 flex items-center justify-between rounded-lg bg-gray-0 p-5">
        <div>
          <p className="text-cap1-m mb-1.5 text-gray-700">임신 테스트기를 촬영하고</p>
          <p className="text-body1-sb text-gray-900">
            <span className="text-orange-600">AI 라인 결과 분석</span>을 받아보세요
          </p>
        </div>
        <Image
          src="/images/img_ai_line.png"
          alt=""
          width={50}
          height={50}
          className="h-[50px] w-[50px] object-contain"
        />
      </div>

      <div className="rounded-lg bg-gray-0 p-5">
        <div className="mb-2">
          <p className="text-sub1-sb text-gray-900">1년 5개월동안</p>
          <p className="text-sub1-sb mb-1 text-gray-900">
            총 <span className="text-orange-600">8번</span>의 분석을 했어요
          </p>
          <p className="text-body2-r text-gray-700">나의 임신 확률은 평균 54.8%예요</p>
        </div>

        <div className="mb-5 flex items-center justify-end gap-2">
          <button
            type="button"
            role="checkbox"
            aria-checked={filter}
            onClick={() => setFilter(!filter)}
            className={`flex h-4 w-4 items-center justify-center rounded-xs border ${
              filter ? 'border-gray-400 bg-gray-900' : 'border-gray-500 bg-white'
            }`}
          >
            {filter && <CheckIcon color="white" />}
          </button>
          <span className="text-body2-r text-gray-900">50% 이상만</span>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4">
          {items.map((item) => (
            <AilineHistoryItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      <FloatingButton
        icon={<SparklesIcon />}
        label="분석하기"
        onClick={() => setSheetOpen(true)}
      />

      <AnalysisMethodSheet
        isOpen={isSheetOpen}
        onClose={() => setSheetOpen(false)}
      />
    </div>
  );
}
