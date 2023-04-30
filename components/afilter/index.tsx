import { IFilters } from "@/types";
import { AfilterCell } from "./afilterCell";

export const Afilter = ({ data }: IFilters) => {
 const site = "Afilter";
 return (
  <div className="flex items-center">
   <div className="w-20 text-sky-200">{site}</div>
   <div className="flex-1 flex py-1 rounded-md ml-2 w-full">
    {data
     .filter((d) => d.website === site)
     .map((el) => (
      <AfilterCell key={el.link} element={el} />
     ))}
   </div>
  </div>
 );
};
