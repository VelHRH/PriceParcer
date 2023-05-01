import { IFilters } from "@/types";
import { HydroecoCell } from "./hydroecoCell";

export const Hydroeco = ({ data }: IFilters) => {
 const site = "Hydroeco";
 return (
  <div className="flex items-center">
   <div className="w-20 text-sky-200">{site}</div>
   <div className="flex-1 flex py-1 bg-slate-800 rounded-md ml-2 w-full">
    {data
     .filter((d) => d.website === site)
     .map((el) => (
      <HydroecoCell key={el.title} element={el} />
     ))}
   </div>
  </div>
 );
};
