import { IFilters } from "@/types";
import { ProfimannCell } from "./profimannCell";

export const Profimann = ({ data }: IFilters) => {
 const site = "Profimann";
 return (
  <div className="flex items-center">
   <div className="w-20">{site}</div>
   <div className="flex-1 flex py-1 rounded-md ml-2">
    {data
     .filter((d) => d.website === site)
     .map((el) => (
      <ProfimannCell key={el.link} element={el} />
     ))}
   </div>
  </div>
 );
};
