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

      {/*
        원본은 카드를 세로로 쭉 쌓지만, 웹은 가로 여백이 남으므로
        lg 이상에서 2열로 배치한다. 모바일은 원본과 동일한 단일 열.
      */}
      <div className="px-5 pt-5">
        <QuickActionCard />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-start">
          <MyHealthCard />
          <HealthFeedbackCard />
          <UserCalendar />
          <UpcomingSchedule />
        </div>
      </div>
    </>
  );
}
