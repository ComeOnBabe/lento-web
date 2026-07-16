import type { AilineHistory } from '@/mock/ailine';

/** 원본 features/ailine/components/AilineHistoryItem.tsx */
export default function AilineHistoryItem({ item }: { item: AilineHistory }) {
  return (
    <div>
      {/* 원본도 실제 사진 대신 회색 플레이스홀더를 쓴다 */}
      <div className="mb-3 flex aspect-square w-full items-center justify-center rounded-md bg-gray-200">
        <span className="text-cap1-r text-gray-600">사진</span>
      </div>

      <div
        className={`inline-block rounded-xs px-2 py-1 ${
          item.isHigh ? 'bg-blue-100' : 'bg-gray-200'
        }`}
      >
        <span
          className={`text-cap1-sb ${item.isHigh ? 'text-blue-600' : 'text-gray-800'}`}
        >
          {item.isHigh ? '임신 가능성이 높아요' : '임신 가능성이 낮아요'}
        </span>
      </div>

      <p className="text-sub2-sb text-gray-900">{item.prob}%</p>
      <p className="text-cap1-sb text-gray-600">{item.date}</p>
    </div>
  );
}
