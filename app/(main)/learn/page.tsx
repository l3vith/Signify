import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";


import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import Head from "next/head";
import { getUserProgress } from "@/db/queries";

const LearnPage = async () => {
  
  const userProgressData = getUserProgress();

  const [
      userProgress,
    ]: any[] = await Promise.all([
      userProgressData,
    ]);
  
  //   if(!userProgress || !userProgress.activeCourseId){
  //   redirect("./learn");
  // }
  


  return (
    <div>
      <Header title={"spanish"}/>
    </div>
  );
};

export default LearnPage;