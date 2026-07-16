'use client';

import type { ReactNode } from 'react';

interface Props {
  icon?: ReactNode;
  label: string;
  onClick?: () => void;
}

/** 원본 features/home/components/FloatingButton.tsx — 마운트 시 스프링으로 튀어오른다 */
export default function FloatingButton({ icon, label, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="animate-fab-in fixed bottom-[88px] right-5 z-40 flex items-center rounded-full bg-orange-600 px-5 py-3.5 shadow-float transition-opacity active:opacity-80 lg:bottom-6"
    >
      {icon}
      <span className={`text-body1-sb text-white ${icon ? 'ml-1.5' : ''}`}>
        {label}
      </span>
    </button>
  );
}
