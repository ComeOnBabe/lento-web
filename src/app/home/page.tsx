import HealthFeedbackCard from '@/components/home/HealthFeedbackCard';
import HomeHeader from '@/components/home/HomeHeader';
import MyHealthCard from '@/components/home/MyHealthCard';
import QuickActionCard from '@/components/home/QuickActionCard';
import UpcomingSchedule from '@/components/home/UpcomingSchedule';
import UserCalendar from '@/components/home/UserCalendar';

export default function HomePage() {
  return (
    <>
      <HomeHeader />

      {/* 원본과 동일하게 카드를 한 줄로 쌓는다 */}
      <div className="pb-tabbar flex flex-col gap-5 px-5 pt-5">
        <QuickActionCard />
        <MyHealthCard />
        <HealthFeedbackCard />
        <UserCalendar />
        <UpcomingSchedule />
      </div>
    </>
  );
}
