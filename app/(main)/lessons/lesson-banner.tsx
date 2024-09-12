import { Button } from "@/components/ui/button"
import Link from "next/link"



const LessonBanner = () => {
  return (
    <div className="p-5 flex flex-col gap-10">
      <div className="w-auto md:w-auto rounded-xl bg-[#202f36] p-5 text-white flex items-center justify-between">
        <div className="space-y-2.5">
          <p className="bg-[#38bdf8] w-fit p-0.5 rounded-sm text-[12px]">Chapter 1</p>
          <h3 className="text-2xl font-bold">Hello and Welcome</h3>
          <p className="">5 lessons to be completed</p>
        </div>
        <div className="flex flex-col">
          <div className="relative">
          <div className="absolute -top-16 right-2.5 border-2 font-bold bg-white uppercase text-[#38bdf8] rounded-xl px-3 text-center py-2.5 mb-5 animate-bounce tracking-wide">
            Start
            <div className="absolute right-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-0"></div>
          </div>
          </div>
        <Link href="/lessons"><Button variant={"primary"} className="w-[100px] h-[50px]">learn</Button></Link>
        </div>
      </div>

      <div className="w-auto md:w-auto rounded-xl bg-[#202f36] p-5 text-white flex items-center justify-between">
        <div className="space-y-2.5">
          <p className="bg-[#38bdf8] w-fit p-0.5 rounded-sm text-[12px]">Chapter 2</p>
          <h3 className="text-2xl font-bold">Let's Converse!!</h3>
          <p className="">6 lessons to be completed</p>
        </div>
        <Link href="/lessons"><Button variant={"primary"} className="w-[100px] h-[50px]">learn</Button></Link>
      </div>
    </div>
  )
}

export default LessonBanner
