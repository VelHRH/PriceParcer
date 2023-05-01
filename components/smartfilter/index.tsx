import { IFilters } from "@/types";
import { SmartfilterCell } from "./smartfilterCell";

export const Smartfilter = ({ data }: IFilters) => {
 const site = "Smartfilter";
 return (
  <div className="flex items-center">
   <div className="w-20 text-sky-200">{site}</div>
   <div className="flex-1 flex py-1 bg-slate-800 rounded-md ml-2 w-full">
    {data
     .filter((d) => d.website === site)
     .map((el) => (
      <SmartfilterCell key={el.title} element={el} />
     ))}
   </div>
  </div>
 );
};
