'use client';

import Image from 'next/image';

/** 원본 features/calendar/components/ConnectSpouseCard.tsx */
export default function ConnectSpouseCard() {
  return (
    <section className="rounded-3xl border border-gray-100 bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <div className="flex-1 pr-4">
          <p className="text-cap1-m mb-1.5 text-gray-700">초대코드를 입력해서</p>
          <p className="text-body1-m text-gray-900">
            <span className="text-orange-600">배우자와 연결</span>하고
          </p>
          <p className="text-body1-m text-gray-900">일정을 공유해보세요!</p>
        </div>

        <div className="flex h-24 w-24 shrink-0 items-center justify-center">
          <Image
            src="/images/img_connecting.png"
            alt=""
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      </div>

      <button
        type="button"
        className="text-body2-sb mt-5 w-full rounded-md bg-gray-200 py-3.5 text-gray-900 transition-colors hover:bg-gray-300"
      >
        연결하기
      </button>
    </section>
  );
}
