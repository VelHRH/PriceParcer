import { IFilters } from "@/types";
import { ProfimannCell } from "./profimannCell";

export const Profimann = ({ data }: IFilters) => {
 const site = "Profimann";
 return (
  <div className="flex items-center w-full">
   <div className="w-20">{site}</div>
   <div className="flex flex-1 py-1 rounded-md ml-2 w-full">
    {data
     .filter((d) => d.website === site)
     .map((el) => (
      <ProfimannCell key={el.link} element={el} />
     ))}
   </div>
  </div>
 );
};
