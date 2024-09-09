// import { Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { courses } from "@/db/schema";
import { InfinityIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
    activeCourse: typeof courses.$inferSelect;
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
}


export const UserProgress = ({ 
    activeCourse,
    hearts,
    points,
    hasActiveSubscription
 }: Props) =>{
    return(
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link href={"/courses"}>
             <Button variant={"primaryOutline"}>
                <Image
                 src = {activeCourse.imageSrc}
                 alt={activeCourse.title}
                 className="rounded-md bg-white"
                 width={32}
                 height={32}
                />
             </Button>
            </Link>
            <Link href="/shop">
             
             <Button variant={"ghost"} className="text-blue-300 border">
                <Image
                src={"/diamond.svg"}
                alt="diamond"
                width={28}
                height={28}
                className="mr-2"
                />
                {points}
             </Button>

            </Link>
            <Link href="/shop">
             <Button variant={"ghost"} className="text-rose-500 border">
                <Image
                src={"/heart.svg"}
                alt="heart"
                width={28}
                height={28}
                className="mr-2"
                />
                {points}
             </Button>
            </Link>
        </div>
    )
}