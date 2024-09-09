import { redirect } from "next/navigation";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { getUnits, getUserProgress } from "@/db/queries";


const LearnPage = async () => {
    const unitsData = getUnits();
    const userProgressData = getUserProgress();
    
    
    const[
        userProgress,
        units,
    ] = await Promise.all([
        userProgressData,
        unitsData,
    ]);

    
    

    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
             <UserProgress
              activeCourse={{imageSrc: "/asl.png", title: "ASL"}}
              hearts={UserProgress.hearts}
              points={UserProgress.points}
              hasActiveSubscription={false}

             />
            </StickyWrapper>
            <FeedWrapper>
                <Header title="Learn" />
                {units.map((unit)=>(
                    <div key={unit.id} className="mb-10 text-white">
                        {JSON.stringify(unit)}
                    </div>
                ))}
            </FeedWrapper>
        </div>
    )
}
  
  export default LearnPage;