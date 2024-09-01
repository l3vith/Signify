import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";

const LearnPage = async () => {
    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
            Learn Page
            </StickyWrapper>
            <FeedWrapper>
                feedWrapper
            </FeedWrapper>
        </div>
    )
}
  
  export default LearnPage;