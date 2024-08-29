import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";
import { courses } from "@/db/schema";
import { Card } from "./card";

const CoursesPage = async () => {
    const data = await getCourses();
    const userProgress = await getUserProgress();

  return (
      <div className="h-full max-w-[912px] px-3 mx-auto">
        <h1 className="h-10 text-2xl font-bold text-white">Language Courses</h1>
        
        {/* <h2 className="text-2xl font-bold text-neutral-700">Hello</h2> */}
        <List 
        courses={data} 
        activeCourseId={userProgress?.["activeCourseId"]}/>
        
        
      </div>
    
  )
}

export default CoursesPage;
