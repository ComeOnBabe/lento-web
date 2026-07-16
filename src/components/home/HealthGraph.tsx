'use client';

import { useId, useMemo } from 'react';

import { BASELINE_TEMPERATURE, WEEKLY_TEMPERATURE } from '@/mock/health';

const WIDTH = 320;
const HEIGHT = 80;
const END_SPACING = 15;

/** 카디널 스플라인 → 베지어. 원본 LineChart 의 curved={true} 를 대신한다. */
function toSmoothPath(points: { x: number; y: number }[], tension = 0.4) {
  if (points.length < 2) return '';

  let d = `M ${points[0].x} ${points[0].y}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;

    const cp1x = p1.x + ((p2.x - p0.x) / 6) * tension * 2;
    const cp1y = p1.y + ((p2.y - p0.y) / 6) * tension * 2;
    const cp2x = p2.x - ((p3.x - p1.x) / 6) * tension * 2;
    const cp2y = p2.y - ((p3.y - p1.y) / 6) * tension * 2;

    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }

  return d;
}

/** 원본 features/home/components/HealthGraph.tsx */
export default function HealthGraph() {
  const gradientId = useId();

  const { greenPath, grayPath, lastPoint } = useMemo(() => {
    const all = [...WEEKLY_TEMPERATURE, ...BASELINE_TEMPERATURE];

    // 원본과 동일한 Y축 스케일 계산: 바닥은 최솟값 -0.2, 꼭대기는 최댓값 +0.2
    const min = Math.min(...all) - 0.2;
    const max = Math.max(...all) + 0.2;

    const project = (values: number[]) =>
      values.map((value, index) => ({
        x: ((WIDTH - END_SPACING) / (values.length - 1)) * index,
        y: HEIGHT - ((value - min) / (max - min)) * HEIGHT,
      }));

    const green = project(WEEKLY_TEMPERATURE);

    return {
      greenPath: toSmoothPath(green),
      grayPath: toSmoothPath(project(BASELINE_TEMPERATURE)),
      lastPoint: green[green.length - 1],
    };
  }, []);

  return (
    <div className="mb-5">
      <div className="mb-2 h-20 w-full">
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          preserveAspectRatio="none"
          className="h-20 w-full overflow-visible"
          role="img"
          aria-label="이번 주 체온 변화 그래프"
        >
          <defs>
            {/* preserveAspectRatio="none" 으로 늘려도 선 굵기가 일정하도록 */}
            <clipPath id={gradientId}>
              <rect x="0" y="-10" width={WIDTH} height={HEIGHT + 20} />
            </clipPath>
          </defs>

          <path
            d={grayPath}
            fill="none"
            stroke="#D1D3D8"
            strokeWidth={1.5}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={greenPath}
            fill="none"
            stroke="#38b686"
            strokeWidth={2.5}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* 마지막 데이터 포인트: 후광 + 알맹이 (원본 customDataPoint) */}
        <div className="relative">
          <div
            className="absolute flex h-6 w-6 items-center justify-center rounded-full bg-[#68D391]/40"
            style={{
              left: `calc(${(lastPoint.x / WIDTH) * 100}% - 12px)`,
              top: lastPoint.y - HEIGHT - 12,
            }}
          >
            <div className="h-2.5 w-2.5 rounded-full bg-[#48BB78]" />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <span className="text-cap2-r text-gray-600">일요일</span>
        <span className="text-cap2-r pl-2 text-gray-600">토요일</span>
      </div>
    </div>
  );
}
