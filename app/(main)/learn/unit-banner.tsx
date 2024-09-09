type Props = {
    title: string;
    description: string;
}

export const UnitBanner = ({
    title,
    description,
}: Props) =>{
    return(
        <div className="w-full rounded-xl bg-green-500 p-5 text-white flex items-center justify-between">
             <div className="w-full rounded-xl bg-green-500 p-5 text-white flex items-center justify-between">
            <div className="space-y-2.5">
              <h3 className="text-2xl font-bold">Unit 1</h3>
              <p className="text-lg">
                Learn the basics of ASL
              </p>
            </div>
        </div>
        </div>
    )
}