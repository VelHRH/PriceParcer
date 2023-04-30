import { IFilters } from "@/types";
import { NemofilterCell } from "./nemofilterCell";

export const Nemofilter = ({ data }: IFilters) => {
 const site = "Nemofilter";
 return (
  <div className="flex items-center">
   <div className="w-20 text-sky-200">{site}</div>
   <div className="flex-1 flex py-1 bg-slate-800 rounded-md ml-2 w-full">
    {data
     .filter((d) => d.website === site)
     .map((el) => (
      <NemofilterCell key={el.link} element={el} />
     ))}
   </div>
  </div>
 );
};
