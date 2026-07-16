import { redirect } from 'next/navigation';

/** 원본 앱과 마찬가지로 첫 진입은 홈 탭 */
export default function RootPage() {
  redirect('/home');
}
