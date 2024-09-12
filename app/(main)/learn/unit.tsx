import { lessons, units } from "@/db/schema";
import { UnitBanner } from "./unit-banner";

type Props = {
    id: number;
    order: number;
    title: string;
    description: string;
    lessons: (typeof lessons.$inferSelect & {
      completed: boolean;
    })[];
    activeLesson: typeof lessons.$inferSelect | undefined;
    unit: typeof units.$inferSelect | undefined;
    activeLessonPercentage: number;
  };
  

const Unit = ({
    id,
    order,
    title,
    description,
    lessons,
    activeLesson,
    activeLessonPercentage,
}: Props) => {
  return (
    <div>
        <UnitBanner title={title} description={description}/>
        
    </div>
  )
}

export default Unit;
