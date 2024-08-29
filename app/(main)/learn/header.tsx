import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
   <div className=" sticky mt-[50px] h-[110px] rounded-[13px] bg-[#6F82E9]">
    <a href="/courses"> <ArrowLeft></ArrowLeft></a>
   </div>
  );
};