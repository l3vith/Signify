import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "@/components/ui/sidebar-item";

import learnicon from "@/public/learnicon.svg";
import alphabetsicon from "@/public/alphabets.svg";
import leaderboardicon from "@/public/leaderboard.svg";
import shopicon from "@/public/shop.svg";
import schoolicon from "@/public/school.svg";
import podcasticon from "@/public/podcast.svg";

type Props = {
    className?: string;
};

export const Sidebar = ({ className }: Props) => {
    return (
        <div className={cn("flex lg:w-[256px] h-full lg:fixed left-0 top-0 px-4 border-r-2 flex-col", className)}>

            <Link href="/learn" className="h-auto">
            <div className="pt-8 pl-4 pb-7 flex gap-x-3 h-auto">
                <Image src="/mascot.svg" width={40} height={40} alt="mascot" className="w-[40px] h-[40px]"></Image>
                <h1 className="text-2xl font-extrabold text-blue-800 tracking-wide h-auto">Lingo</h1>
            </div>
            </Link>

            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label="Learn" href="/learn" iconSrc={learnicon}></SidebarItem>
                <SidebarItem label="Alphabets" href="/alphabets" iconSrc={alphabetsicon}></SidebarItem>
                <SidebarItem label="Leaderboards" href="/leaderboard" iconSrc={leaderboardicon}></SidebarItem>
                <SidebarItem label="Shop" href="/shop" iconSrc={shopicon}></SidebarItem>
                <SidebarItem label="Schools" href="/schools" iconSrc={schoolicon}></SidebarItem>
                <SidebarItem label="Podcast" href="/podcast" iconSrc={podcasticon}></SidebarItem>
            </div>
        </div>
    );
};