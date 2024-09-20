import { useCallback } from "react";

import Image from "next/image";
import { useAudio, useKey } from "react-use";

import { challenges } from "@/db/schema";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CardProps = {
  id: number;
  text: string | null;
  imageSrc: string | null;
  audioSrc: string | null;
  shortcut: string;
  selected?: boolean;
  onClick: () => void;
  status?: "correct" | "wrong" | "none";
  disabled?: boolean;
  type: (typeof challenges.$inferSelect)["type"];
};

export const Card = ({
  text,
  imageSrc,
  audioSrc,
  shortcut,
  selected,
  onClick,
  status,
  disabled,
  type,
}: CardProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [audio, _, controls] = useAudio({ src: audioSrc || "" });

  const handleClick = useCallback(() => {
    if (disabled) return;

    void controls.play();
    onClick();
  }, [disabled, onClick, controls]);

  useKey(shortcut, handleClick, {}, [handleClick]);

  return (
    <div
      className="flex flex-col justify-center items-center lg:gap-5 gap-2 mb-2"
    >
      {audio}
      {imageSrc && (
        
          <video
          onClick={handleClick}
          className={cn(
            " lg:h-[300px] object-fill cursor-pointer rounded-xl border-2 border-b-4  hover:bg-black/5 active:border-b-2 sm:h-[100px] md:h-[250px] lg:w-[400px] h-[200px]",
            selected && "border-sky-300 bg-sky-100 hover:bg-sky-100",
            selected &&
              status === "correct" &&
              "border-green-300 bg-green-100 hover:bg-green-100",
            selected &&
              status === "wrong" &&
              "border-rose-300 bg-rose-100 hover:bg-rose-100",
            disabled && "pointer-events-none hover:bg-white",
            type === "ASSIST" && "w-full lg:p-3"
          )}
            src={imageSrc}
            type="video/mp4"
            autoPlay
            loop
            muted
            controls
          >
            Your browser does not support the video tag.
          </video>
        
      )}

      <div
        className={cn(
          "flex items-center justify-between",
          type === "ASSIST" && "flex-row-reverse"
        )}
      >
        {type === "ASSIST" && <div aria-hidden />}
        <Button
          onClick={handleClick}
          className={cn(
            "text-sm lg:text-base text-neutral-600 p-4 h-[25px] w-[200px] lg:w-[300px]",
            selected && "text-sky-500",
            selected && status === "correct" && "text-green-500",
            selected && status === "wrong" && "text-rose-500",
            selected && "border-sky-300 bg-sky-100 hover:bg-sky-100",
            selected &&
              status === "correct" &&
              "border-green-300 bg-green-100 hover:bg-green-100",
            selected &&
              status === "wrong" &&
              "border-rose-300 bg-rose-100 hover:bg-rose-100",
            disabled && "pointer-events-none hover:bg-white",
            type === "ASSIST"
          )} 
          variant = "default"
        >
          {text}
        </Button>

        {/* <div
          className={cn(
            "flex h-[20px] w-[20px] items-center justify-center rounded-lg border-2 text-xs font-semibold text-neutral-400 lg:h-[30px] lg:w-[30px] lg:text-[15px]",
            selected && "border-sky-300 text-sky-500",
            selected &&
              status === "correct" &&
              "border-green-500 text-green-500",
            selected && status === "wrong" && "border-rose-500 text-rose-500"
          )}
        >
          {shortcut}
        </div> */}
      </div>
    </div>

    
  );
};
