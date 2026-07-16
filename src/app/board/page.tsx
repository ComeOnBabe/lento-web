import FeedItem from '@/components/board/FeedItem';
import PageHeader from '@/components/shell/PageHeader';
import { DUMMY_POSTS } from '@/mock/board';

export default function BoardPage() {
  return (
    <div className="min-h-full bg-white">
      <PageHeader title="게시판" />

      <div className="pb-tabbar">
        {DUMMY_POSTS.map((post) => (
          <FeedItem key={post.id} item={post} />
        ))}
      </div>
    </div>
  );
}
