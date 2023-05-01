import { IFilters } from "@/types";
import { HoneywellCell } from "./honeywellCell";

export const Honeywell = ({ data }: IFilters) => {
 const site = "Honeywell";
 return (
  <div className="flex items-center w-full">
   <div className="w-20 text-sky-200">{site}</div>
   <div className="flex flex-1 py-1 rounded-md ml-2 w-full">
    {data
     .filter((d) => d.website === site)
     .map((el) => (
      <HoneywellCell key={el.link} element={el} />
     ))}
   </div>
  </div>
 );
};
