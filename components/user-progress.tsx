// import { Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfinityIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
    activeCourse: {imageSrc: string; title: string};
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
        <div className="flex gap-[24px] lg:fixed mt-[0px] border">
            <div className="w-[69px]">
                <Link href={"/shop"}>
             <div className="w-[69px] h-[40px] border rounded-md">
             <Button variant={"ghost"} className="w-[69px] h-[40px] border rounded-md flex gap-1">
                <Image
                        height={20}
                        width={20} src={"/heart.svg"} alt={"heart"}  className="h-[25px] w-[25px] " />
                        {
                            hasActiveSubscription ? <InfinityIcon size={20} className="h-4 w-4 stroke-[3]" /> : hearts
                        }
                        {hearts}
              </Button>
             </div>
            </Link>
            </div>

           <div className="w-[69px]">
           <Link href={"/shop"}>
             <div className="w-[69px] h-[40px] border rounded-md">
             <Button variant={"ghost"} className="w-[69px] h-[40px] border rounded-md flex gap-2">
                <Image
                        height={20}
                        width={20} src={"/diamond.svg"} alt={"heart"}  className="h-[25px] w-[25px] " />
                        {points}
              </Button>
             </div>
            </Link>
           </div>

        </div>
    )
}