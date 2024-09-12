import { redirect } from "next/navigation";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
// import { getCourseProgress,
//         getLessonPercentage,
//         getUnits,
//         getUserProgress } from "@/db/queries";
import Unit from "./unit";
import Leaderboard from "./leaderboard";
import {lessons, units as unitSchema}from "@/db/schema";
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
  // const unitsData = getUnits();
  // const userProgressData = getUserProgress();
  // const courseProgressData = getCourseProgress();
  // const lessonPercentageData = getLessonPercentage();

  // const [userProgress, 
  //   units,
  //   courseProgress,
  //   lessonPercentage
  //   ] = await Promise.all([
  //   userProgressData,
  //   unitsData,
  //   courseProgressData,
  //   lessonPercentageData,
  // ]);
    
  // if (!userProgress || !userProgress.activeCourse){
  //   redirect("/course");
  // }

  // if (!courseProgress){
  //   redirect("/courses");
  // }

  return (
    <div>
      <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ id: 0, imageSrc: "/asl.png", title: "ASL" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
        <Leaderboard/>
      </StickyWrapper>
      <FeedWrapper>
        <Header title={"Learn"}/>  //userProgress.activeCourse.title
        {/* {units.map((unit) => (
          <div key={unit.id} className="mb-10">
            <Unit
            id={unit.id}
            order={(unit.order)}
            description={unit.description}
            title={unit.title}
            lessons={unit.lessons}
            activeLesson={courseProgress.activeLesson}
            activeLessonPercentage={courseProgress.activeLesson as typeof lessons.
              $inferSelect & {
                unit: typeof unitsSchema.$inferSelect;
              } | undefined }
              activeLessonPercentage={lessonPercentage}
            />
          </div>
        ))} */}
        <Unit id={0} order={0} title={""} description={""} lessons={[]} activeLesson={undefined} unit={undefined} activeLessonPercentage={0}/>
      </FeedWrapper>
      </div>
    </div>
  );
};

export default LearnPage;
