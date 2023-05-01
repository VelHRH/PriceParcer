import { IFilters } from "@/types";
import { IwaterCell } from "./iwaterCell";

export const Iwater = ({ data }: IFilters) => {
 const site = "Iwater";
 return (
  <div className="flex items-center">
   <div className="w-20 text-sky-200">{site}</div>
   <div className="flex-1 flex py-1 bg-slate-800 rounded-md ml-2 w-full">
    {data
     .filter((d) => d.website === site)
     .map((el) => (
      <IwaterCell key={el.title} element={el} />
     ))}
   </div>
  </div>
 );
};
