import { IFilters } from "@/types";
import { AquamartCell } from "./aquamartCell";

export const Aquamart = ({ data }: IFilters) => {
 const site = "Aquamart";
 return (
  <div className="flex items-center">
   <div className="w-20 text-sky-200">{site}</div>
   <div className="flex-1 flex py-1 bg-slate-800 rounded-md ml-2 w-full">
    {data
     .filter((d) => d.website === site)
     .map((el) => (
      <AquamartCell key={el.link} element={el} />
     ))}
   </div>
  </div>
 );
};
