'use client';

interface SlidingTabProps {
  tabs: string[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

/**
 * 원본 shared/components/SlidingTab.tsx.
 * 네이티브는 컨테이너 너비를 측정해 translateX 를 계산했지만,
 * 웹에서는 % 기반으로 두면 리사이즈에도 알아서 맞는다.
 */
export default function SlidingTab({
  tabs,
  activeTab,
  onTabChange,
}: SlidingTabProps) {
  const tabWidth = 100 / tabs.length;

  return (
    <div className="relative mb-4 flex rounded-full bg-gray-200 p-1">
      <div
        aria-hidden
        className="absolute bottom-1 top-1 rounded-full bg-white shadow-card transition-transform duration-300 ease-out"
        style={{
          width: `calc((100% - 8px) / ${tabs.length})`,
          transform: `translateX(${activeTab * 100}%)`,
          left: '4px',
        }}
      />

      {tabs.map((tab, index) => {
        const isActive = activeTab === index;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onTabChange(index)}
            aria-pressed={isActive}
            style={{ width: `${tabWidth}%` }}
            className={`text-body2-sb z-10 flex-1 rounded-full py-2.5 transition-colors ${
              isActive ? 'text-gray-900' : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
