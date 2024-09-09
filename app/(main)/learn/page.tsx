import { redirect } from "next/navigation";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { getUnits, getUserProgress } from "@/db/queries";
import Unit from "./unit";

type Props = {
  activeCourse: {
    id: number;
    imageSrc: string;
    title: string;
  };
  hearts: number; // Add the 'hearts' property to the Props type
  points: number;
  hasActiveSubscription: boolean;
};



const LearnPage = async () => {
  const unitsData = getUnits();
  const userProgressData = getUserProgress();

  const [userProgress, units] = await Promise.all([
    userProgressData,
    unitsData,
  ]);

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ id: 0, imageSrc: "/asl.png", title: "ASL" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Learn" />

        {units.map((unit) => (
          <div key={unit.id} className="mb-10 text-white">
            <Unit 
              order={0}
              description={unit.description}
              title={unit.title}
              lessons={unit.lessons}
              activeLesson={undefined}
              activeLessonPercentage={0} id={0} unit={undefined}            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
