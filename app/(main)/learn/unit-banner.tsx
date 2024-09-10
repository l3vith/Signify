import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  description: string;
};

export const UnitBanner = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col gap-5">

      <div className="w-full rounded-xl bg-[#202f36] p-5 text-white flex items-center justify-between">
        <div className="space-y-2.5">
          <h3 className="text-2xl font-bold">Introduction</h3>
          <p className="text-lg">Unit 1</p>
        </div>
        <a href="/lessons"><Button variant={"primary"} className="w-[100px] h-[50px]">learn</Button></a>
      </div>

      <div className="w-full rounded-xl bg-[#202f36] p-5 text-white flex items-center justify-between">
        <div className="space-y-2.5">
          <h3 className="text-2xl font-bold">Everyday Life</h3>
          <p className="text-lg">Unit 2</p>
        </div>
        <a href="#"><Button variant={"primary"} className="w-[100px] h-[50px]">learn</Button></a>
      </div>

      <div className="w-full rounded-xl bg-[#202f36] p-5 text-white flex items-center justify-between">
        <div className="space-y-2.5">
          <h3 className="text-2xl font-bold">You and Me</h3>
          <p className="text-lg">Unit 3</p>
        </div>
        <a href="#"><Button variant={"primary"} className="w-[100px] h-[50px]">learn</Button></a>
      </div>

      <div className="w-full rounded-xl bg-[#202f36] p-5 text-white flex items-center justify-between">
        <div className="space-y-2.5">
          <h3 className="text-2xl font-bold">On the Way</h3>
          <p className="text-lg">Unit 4</p>
        </div>
        <a href="#"><Button variant={"primary"} className="w-[100px] h-[50px]">learn</Button></a>
      </div>

      <div className="w-full rounded-xl bg-[#202f36] p-5 text-white flex items-center justify-between">
        <div className="space-y-2.5">
          <h3 className="text-2xl font-bold">Around the world</h3>
          <p className="text-lg">Unit 5</p>
        </div>
        <a href="#"><Button variant={"primary"} className="w-[100px] h-[50px]">learn</Button></a>
      </div>
    </div>
  );
};
