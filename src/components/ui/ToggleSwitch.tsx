'use client';

interface ToggleSwitchProps {
  label?: string;
  isOn: boolean;
  onToggle: () => void;
  activeColor?: string;
  inactiveColor?: string;
}

/** 원본 shared/components/ToggleSwitch.tsx (RN Switch → 웹 스위치로 재현) */
export default function ToggleSwitch({
  label,
  isOn,
  onToggle,
  activeColor = '#1A1C20',
  inactiveColor = '#B0B3BA',
}: ToggleSwitchProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      role="switch"
      aria-checked={isOn}
      aria-label={label}
      className="flex items-center gap-2"
    >
      {label && <span className="text-body2-sb text-gray-800">{label}</span>}

      <span
        className="relative flex h-[31px] w-[51px] shrink-0 items-center rounded-full transition-colors duration-200"
        style={{ backgroundColor: isOn ? activeColor : inactiveColor }}
      >
        <span
          className="absolute h-[27px] w-[27px] rounded-full bg-white shadow-card transition-transform duration-200 ease-out"
          style={{ transform: `translateX(${isOn ? 22 : 2}px)` }}
        />
      </span>
    </button>
  );
}
