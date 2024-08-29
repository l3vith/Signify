import { getCourses } from "@/db/queries";
import { List } from "./list";
import { courses } from "@/db/schema";
import { Card } from "./card";

const CoursesPage = async () => {
<<<<<<< HEAD
    const coursesData = getCourses();
    const userProgressData = getUserProgress();

    const [
      courses,
      userProgress,
    ] = await Promise.all([
      coursesData,
      userProgressData,
    ]);


=======
    const data = await getCourses();
>>>>>>> c2e9091e040abbb9bbcd6953f98f100cf3a67c59

  return (
      <div className="h-full max-w-[912px] px-3 mx-auto">
        <h1 className="h-10 text-2xl font-bold text-white">Language Courses</h1>
        
        {/* <h2 className="text-2xl font-bold text-neutral-700">Hello</h2> */}
<<<<<<< HEAD
        <List 
        courses={courses} 
        activeCourseId={userProgress?.["activeCourseId"]}/>
=======
        <List courses={data} activeCourseId={1}/>
>>>>>>> c2e9091e040abbb9bbcd6953f98f100cf3a67c59
        
        
      </div>
    
  )
}

export default CoursesPage;
