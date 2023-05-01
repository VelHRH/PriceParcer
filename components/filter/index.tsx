import { IFilters } from "@/types";
import { FilterCell } from "./filterCell";

export const Filter = ({ data }: IFilters) => {
 const site = "Filter";
 return (
  <div className="flex items-center">
   <div className="w-20 text-sky-200">{site}</div>
   <div className="flex-1 flex py-1 bg-slate-800 rounded-md ml-2 w-full">
    {data
     .filter((d) => d.website === site)
     .map((el) => (
      <FilterCell key={el.title} element={el} />
     ))}
   </div>
  </div>
 );
};
