/** lento-frontend/features/ailine/components/AilineHistoryView.tsx 의 목데이터 */

export interface AilineHistory {
  id: number;
  isHigh: boolean;
  prob: number;
  date: string;
}

export const MOCK_HISTORY: AilineHistory[] = [
  { id: 1, prob: 100, isHigh: true, date: '2026년 2월 15일' },
  { id: 2, prob: 15, isHigh: false, date: '2026년 2월 10일' },
  { id: 3, prob: 98, isHigh: true, date: '2026년 1월 20일' },
  { id: 4, prob: 10, isHigh: false, date: '2026년 1월 15일' },
];
