import FitnessIcon from '@/assets/icons/ic_fitness.svg';
import TestKitIcon from '@/assets/icons/ic_testkit.svg';

const ACTIONS = [
  { label: '임신 테스트 스캔', Icon: TestKitIcon },
  { label: '어떤 버튼을', Icon: FitnessIcon },
];

/** 원본 features/home/components/QuickActionCard.tsx */
export default function QuickActionCard() {
  return (
    <div className="mb-4 flex rounded-3xl border border-gray-100 bg-gray-0 px-2 py-5 shadow-card">
      {ACTIONS.map(({ label, Icon }) => (
        <button
          key={label}
          type="button"
          className="flex flex-1 items-center justify-center gap-2 transition-opacity active:opacity-60"
        >
          <Icon width={20} height={20} />
          <span className="text-body2-sb text-gray-900">{label}</span>
        </button>
      ))}
    </div>
  );
}
