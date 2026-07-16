import FeedItem from '@/components/board/FeedItem';
import PageHeader from '@/components/shell/PageHeader';
import { DUMMY_POSTS } from '@/mock/board';

export default function BoardPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader title="게시판" />

      {/* 피드는 원본처럼 한 줄로 세우되, 데스크톱에서 너무 넓어지지 않게 폭을 제한한다 */}
      <div className="mx-auto max-w-[560px]">
        {DUMMY_POSTS.map((post) => (
          <FeedItem key={post.id} item={post} />
        ))}
      </div>
    </div>
  );
}
