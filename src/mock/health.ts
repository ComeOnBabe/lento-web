/** lento-frontend/features/health 의 목데이터 중 홈 화면에 쓰이는 부분만 옮긴 것 */

export interface HealthReport {
  id: string;
  hospitalName: string;
  testDate: string;
  headline: string;
  interpretation: string;
  summary: { caution: string | null };
}

export const LATEST_REPORT: HealthReport = {
  id: 'report-2026-07',
  hospitalName: '서울 라온산부인과',
  testDate: '2026.07.02',
  headline: '난소 기능은 양호하고, 갑상선 수치만 지켜보면 돼요',
  interpretation:
    'AMH 3.19ng/mL 로 같은 나이 평균보다 높아 난자 저장량은 양호해요. 다만 TSH 3.8μIU/mL 는 착상에 영향을 줄 수 있는 경계 구간이라 재검사를 권해요.',
  summary: { caution: 'TSH 경계 구간' },
};

/** HealthGraph 의 주간 체온 데이터 */
export const WEEKLY_TEMPERATURE = [36.5, 36.6, 36.5, 36.8, 37.0, 36.9, 37.2];
export const BASELINE_TEMPERATURE = [36.4, 36.4, 36.5, 36.6, 36.7, 36.8, 36.9];
