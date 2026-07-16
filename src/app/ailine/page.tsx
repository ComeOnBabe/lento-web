'use client';

import { useState } from 'react';

import AilineEmptyView from '@/components/ailine/AilineEmptyView';
import AilineHistoryView from '@/components/ailine/AilineHistoryView';
import PageHeader from '@/components/shell/PageHeader';

export default function AilinePage() {
  // 원본 app/(app)/(tabs)/ailine.tsx 의 hasHistory 상태.
  // 원본에는 토글 UI가 없어 빈 상태를 볼 수 없어서, 디자인 확인용 스위치를 뒀다.
  const [hasHistory, setHasHistory] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="AI 라인"
        action={
          <button
            type="button"
            onClick={() => setHasHistory((prev) => !prev)}
            className="text-cap1-sb rounded-full border border-gray-400 px-3 py-1 text-gray-700 transition-colors hover:bg-gray-100"
          >
            {hasHistory ? '빈 상태 보기' : '기록 보기'}
          </button>
        }
      />

      {hasHistory ? <AilineHistoryView /> : <AilineEmptyView />}
    </div>
  );
}
