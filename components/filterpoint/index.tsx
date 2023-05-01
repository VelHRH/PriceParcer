import { IFilters } from "@/types";
import { FilterpointCell } from "./filterpointCell";

export const Filterpoint = ({ data }: IFilters) => {
 const site = "Filterpoint";
 return (
  <div className="flex items-center">
   <div className="w-20 text-sky-200">{site}</div>
   <div className="flex-1 flex py-1 rounded-md ml-2 w-full">
    {data
     .filter((d) => d.website === site)
     .map((el) => (
      <FilterpointCell key={el.title} element={el} />
     ))}
   </div>
  </div>
 );
};
