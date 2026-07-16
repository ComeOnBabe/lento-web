'use client';

import { useEffect, useState } from 'react';

import CtaButton from '@/components/ui/CtaButton';

type AnalysisMethod = 'camera' | 'gallery';

const OPTIONS: { value: AnalysisMethod; label: string }[] = [
  { value: 'camera', label: '카메라 촬영' },
  { value: 'gallery', label: '앨범에서 불러오기' },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

/** 원본 features/ailine/components/AilineAnalysisMethodBottomSheet.tsx (@gorhom/bottom-sheet → 직접 구현) */
export default function AnalysisMethodSheet({ isOpen, onClose }: Props) {
  const [selected, setSelected] = useState<AnalysisMethod>('gallery');

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
        className="absolute inset-0 transition-opacity duration-300"
        style={{ backgroundColor: isOpen ? 'rgba(0,0,0,0.4)' : 'transparent' }}
        tabIndex={isOpen ? 0 : -1}
      />

      <div
        className="absolute inset-x-0 bottom-0 rounded-t-3xl bg-white px-5 pb-6 pt-4 transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${isOpen ? 0 : 100}%)` }}
      >
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-gray-400" />

        <div className="mb-4 mt-2">
          <h2 className="text-sub2-sb text-gray-900">어떤 방식으로 분석 해볼까요?</h2>
          <p className="text-body1-m text-gray-800">하나를 선택해주세요</p>
        </div>

        <div className="mb-8 flex flex-col gap-y-3">
          {OPTIONS.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => setSelected(value)}
              aria-pressed={selected === value}
              className="flex items-center justify-between rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:bg-gray-100"
            >
              <span className="text-body1-sb text-gray-1000">{label}</span>
              <span
                className={`h-[26px] w-[26px] rounded-full ${
                  selected === value
                    ? 'border-[5px] border-gray-1000'
                    : 'border border-gray-500'
                }`}
              />
            </button>
          ))}
        </div>

        <CtaButton title="이대로 진행하기" onClick={onClose} />
      </div>
    </div>
  );
}
