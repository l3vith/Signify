import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";
import { courses } from "@/db/schema";
import { Card } from "./card";

const CoursesPage = async () => {
    const coursesData = getCourses();
    const userProgressData = getUserProgress();

    const [
      courses,
      userProgress,
    ] = await Promise.all([
      coursesData,
      userProgressData,
    ]);



  return (
      <div className="h-full max-w-[912px] px-3 mx-auto">
        <h1 className="h-10 text-2xl font-bold text-white">Language Courses</h1>
        
        {/* <h2 className="text-2xl font-bold text-neutral-700">Hello</h2> */}
        <List 
        courses={courses} 
        activeCourseId={userProgress?.["activeCourseId"]}/>
        
        
      </div>
    
  )
}

export default CoursesPage;
