import { IFilters } from "@/types";
import { AqualifeCell } from "./aqualifeCell";

export const Aqualife = ({ data }: IFilters) => {
 const site = "Aqualife";
 return (
  <div className="flex items-center">
   <div className="w-20 text-sky-200">{site}</div>
   <div className="flex-1 flex py-1 rounded-md ml-2 w-full">
    {data
     .filter((d) => d.website === site)
     .map((el) => (
      <AqualifeCell key={el.link} element={el} />
     ))}
   </div>
  </div>
 );
};
