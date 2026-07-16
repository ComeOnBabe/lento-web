'use client';

import { LogOut, Settings, Trash2, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ACTIVE_TINT, NAV_ITEMS } from './navItems';

const SUB_MENU = [
  { icon: User, label: '내가 쓴 글' },
  { icon: Trash2, label: '내 글 삭제' },
  { icon: Settings, label: '설정 및 기타' },
];

/**
 * 데스크톱 전용 좌측 레일.
 * 네이티브에는 없는 화면이라, 하단 탭바(주 내비게이션)와
 * 사이드바 드로어(부가 메뉴)를 한 곳에 합쳐 웹 관습에 맞춘 것.
 */
export default function NavRail() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[240px] flex-col justify-between border-r border-gray-300 bg-white px-4 py-6 lg:flex">
      <div>
        <Link href="/home" className="mb-8 flex items-center gap-2 px-3">
          <span className="text-head2-b text-orange-600">lento</span>
        </Link>

        <ul className="flex flex-col gap-1">
          {NAV_ITEMS.map(({ href, label, Icon }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center gap-3 rounded-md px-3 py-3 transition-colors ${
                    isActive
                      ? 'bg-orange-100 text-orange-600'
                      : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  <span className="flex w-5 justify-center">
                    <Icon
                      width={18}
                      height={18}
                      color={isActive ? ACTIVE_TINT : '#868B94'}
                    />
                  </span>
                  <span className="text-body1-sb">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 border-t border-gray-300 pt-4">
          {SUB_MENU.map(({ icon: Icon, label }) => (
            <button
              key={label}
              type="button"
              className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-gray-800 transition-colors hover:bg-gray-100"
            >
              <Icon size={18} strokeWidth={2} />
              <span className="text-body2-sb">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="flex items-center gap-3 rounded-md px-3 py-2.5 text-red-600 transition-colors hover:bg-red-100"
      >
        <LogOut size={18} strokeWidth={2} />
        <span className="text-body2-sb">로그아웃</span>
      </button>
    </aside>
  );
}
