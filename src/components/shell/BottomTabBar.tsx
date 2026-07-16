'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ACTIVE_TINT, INACTIVE_TINT, NAV_ITEMS } from './navItems';

/** 원본 Tabs 의 tabBarStyle(높이, 상단 보더, 틴트 색) 을 옮긴 것 */
export default function BottomTabBar() {
  const pathname = usePathname();

  return (
    /* 프레임 기준으로 붙도록 absolute. 데스크톱은 홈 인디케이터 자리를 pb 로 비운다. */
    <nav className="absolute inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white pb-[env(safe-area-inset-bottom)] lg:pb-6">
      <ul className="flex h-[64px] items-stretch">
        {NAV_ITEMS.map(({ href, label, Icon }) => {
          const isActive = pathname === href;
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className="flex h-full flex-col items-center justify-center gap-1 transition-opacity active:opacity-60"
              >
                <Icon
                  width={20}
                  height={20}
                  color={isActive ? ACTIVE_TINT : INACTIVE_TINT}
                />
                <span
                  className="text-[12px] font-semibold"
                  style={{ color: isActive ? ACTIVE_TINT : INACTIVE_TINT }}
                >
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
