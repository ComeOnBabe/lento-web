'use client';

import { Bookmark, Heart, MessageCircle, MoreHorizontal, Send } from 'lucide-react';
import { useState } from 'react';

import { TONE_GRADIENT, type Feed } from '@/mock/board';

import CommentSheet from './CommentSheet';

/** 원본 features/board/components/FeedItem.tsx */
export default function FeedItem({ item }: { item: Feed }) {
  const [isCommentSheetOpen, setCommentSheetOpen] = useState(false);

  return (
    <>
      <article className="mb-6 border-b border-gray-100 bg-white pb-4">
        <div className="flex items-center justify-between px-3 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full border border-gray-400 bg-gray-400" />
            <span className="text-body2-sb text-gray-900">{item.username}</span>
            <span className="text-body2-r text-gray-600">· {item.time}</span>
          </div>
          <MoreHorizontal size={20} color="black" />
        </div>

        <div
          className="relative aspect-[4/5] w-full"
          style={{ background: TONE_GRADIENT[item.tone] }}
        >
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-x-4 bottom-8">
            <h2 className="text-head1-b mb-4 whitespace-pre-line text-white">
              {item.title}
            </h2>

            <div className="flex items-center gap-4">
              <span className="text-body2-sb text-white/90">{item.category}</span>
              <div className="h-px flex-1 bg-white/50" />
            </div>
          </div>
        </div>

        <div className="mt-1 flex items-center justify-between px-3 py-3">
          <div className="flex items-center gap-4">
            <button type="button" aria-label="좋아요">
              <Heart size={26} color="black" />
            </button>

            <button
              type="button"
              onClick={() => setCommentSheetOpen(true)}
              className="flex items-center gap-1 transition-opacity active:opacity-50"
            >
              <MessageCircle size={24} color="black" className="-scale-x-100" />
              {item.comments > 0 && (
                <span className="text-body2-sb text-gray-900">{item.comments}</span>
              )}
            </button>

            <button type="button" aria-label="공유">
              <Send size={24} color="black" />
            </button>
          </div>
          <button type="button" aria-label="저장">
            <Bookmark size={24} color="black" />
          </button>
        </div>

        <div className="px-3">
          <p className="text-body2-r line-clamp-2 text-gray-900">
            <span className="text-body2-sb">{item.username} </span>
            {item.caption}
          </p>
          <button
            type="button"
            onClick={() => setCommentSheetOpen(true)}
            className="text-body2-r mt-1 text-gray-600"
          >
            ... 더 보기
          </button>
        </div>
      </article>

      <CommentSheet
        isOpen={isCommentSheetOpen}
        onClose={() => setCommentSheetOpen(false)}
      />
    </>
  );
}
