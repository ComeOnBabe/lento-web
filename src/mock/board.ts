/**
 * lento-frontend/features/board/mock/dummy.ts 를 옮긴 것.
 * 원본은 이미지를 via.placeholder.com 에서 받아오는데 해당 서비스가 종료돼
 * 웹에서는 톤만 지정하고 CSS 그라디언트 플레이스홀더로 렌더한다.
 */

export interface Feed {
  id: number;
  username: string;
  time: string;
  title: string;
  category: string;
  comments: number;
  caption: string;
  tone: 'slate' | 'stone';
}

export const DUMMY_POSTS: Feed[] = [
  {
    id: 1,
    username: 'trip_again_kor',
    time: '2시간',
    title: '왕과 사는 남자\n34번째 1000만 영화 달성',
    category: 'Issue',
    comments: 11,
    caption:
      "영화 '왕과 사는 남자'가 개봉 31일 만에 관객 1,000만 명을 돌파했습니다. 🎬",
    tone: 'slate',
  },
  {
    id: 2,
    username: 'movie_holic',
    time: '4시간',
    title: '올해 최고의 기대작\n드디어 개봉 확정!',
    category: 'News',
    comments: 42,
    caption:
      '많은 분들이 기다리시던 그 영화가 드디어 다음 달 개봉합니다. 기대해주세요!',
    tone: 'stone',
  },
];

export const TONE_GRADIENT: Record<Feed['tone'], string> = {
  slate: 'linear-gradient(135deg, #8C9098 0%, #5B6068 100%)',
  stone: 'linear-gradient(135deg, #B4ADA6 0%, #7D766F 100%)',
};
