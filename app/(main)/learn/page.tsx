import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";


import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress } from "@/db/queries";

const LearnPage = async () => {

  const userProgressData = getUserProgress();

  const [
    userProgress,
  ] = await Promise.all([
    userProgressData,
  ]);
  ]


  return (
    <div>
      This is a marketing page
    </div>
  );
};