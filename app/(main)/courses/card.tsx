//Card elements for the language courses section

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type Props = {
    title: string;
    id: number;
    imageSrc: string;
    onClick: (id: number) => void;
    disabled? : boolean;
    active? : boolean;
};

export const Card = ({
    title,
    id,
    imageSrc,
    disabled,
    onClick,
    active,
}: Props) => {
    return(
        <a href="./learn">
            <div 
        onClick={()=> onClick(id)}
        className={cn("h-[100px] border-2 rounded-xl border-b-4 hover:bg-white cursor-pointer active:border-b-2 flex flex-col items-center justify-between  min-h-[217px] min-w-[200px] text-white", disabled && "pointer-events-none opacity-50")}
        >
        {/* <div className="flex flex-col justify-end">
        <div className="h-[24px] w-[24px] min-[24px] flex items-center justify-end ">
            {active && (
                <div className="rounded-md bg-green-600 flex items-center justify-center p-1.5">
                    <Check className="text-white stroke-[4] h-4 w-4"/>
                </div>
            )}
        </div>
        </div> */}

        <Image 
         src={imageSrc}
         alt={title}
         height={100}
         width={100}
         className="object-cover rounded drop-shadow-md h-[150px] w-[150px] mt-10"
        />
        <p className="text-white text-center font-bold">{title}</p>
        </div>
        </a>
    )
}