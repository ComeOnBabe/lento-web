'use client';

interface CtaButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}

/** 원본 shared/components/CtaButton.tsx */
export default function CtaButton({
  title,
  onClick,
  disabled = false,
}: CtaButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`text-body1-sb w-full rounded-md py-4 text-white transition-opacity ${
        disabled ? 'bg-gray-500' : 'bg-orange-600 active:opacity-80'
      }`}
    >
      {title}
    </button>
  );
}
