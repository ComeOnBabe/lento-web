'use client';

import { createContext, useContext } from 'react';

/**
 * 앱이 폰 프레임 안에서 렌더되므로 스크롤은 window 가 아니라
 * 프레임 내부 요소에서 일어난다. 스크롤에 반응하는 컴포넌트(HomeHeader)가
 * 그 요소를 찾을 수 있도록 공유한다.
 */
export const ScrollAreaContext = createContext<HTMLElement | null>(null);

export const useScrollArea = () => useContext(ScrollAreaContext);
