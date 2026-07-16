import { Camera, Plus } from 'lucide-react';
import Image from 'next/image';

/** 원본 features/ailine/components/AilineEmptyView.tsx (분석 이력이 없을 때) */
export default function AilineEmptyView() {
  return (
    /* 한 화면에 담기는 안내 화면이라 데스크톱에서도 폭을 모바일 수준으로 묶어둔다 */
    <div className="mx-auto flex min-h-[calc(100vh-56px)] max-w-[560px] flex-col justify-between bg-white px-5 pb-6 pt-8">
      <div>
        <h2 className="text-head2-b mb-10 whitespace-pre-line text-gray-900">
          {'임신 테스트기를 촬영하고\nAI 라인 결과 분석을 받아보세요'}
        </h2>

        <div className="flex items-center justify-center py-10">
          <Image
            src="/images/img_ai_line.png"
            alt=""
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        <div className="mt-6 flex flex-col gap-y-5 px-2">
          <div className="flex items-center gap-x-4">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-100">
              <Camera size={14} color="#EAB308" />
            </div>
            <p className="text-body1-m text-gray-600">
              카메라 촬영 또는 앨범에서 불러와요
            </p>
          </div>

          <div className="flex items-center gap-x-4">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100">
              <span className="text-cap1-sb text-blue-500">%</span>
            </div>
            <p className="text-body1-m text-gray-600">
              임신 가능성을 %로 확인 할 수 있어요
            </p>
          </div>

          <div className="flex items-start gap-x-4">
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
              <Plus size={16} color="#22C55E" />
            </div>
            <p className="text-body1-m flex-1 text-gray-600">
              결과는 AI 분석에 의한 참고용이며, 의학적 진단이 아니에요
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="text-sub2-sb mt-5 w-full rounded-xl bg-[#F26B30] py-4 text-white transition-opacity active:opacity-80"
      >
        촬영하러 가기
      </button>
    </div>
  );
}
