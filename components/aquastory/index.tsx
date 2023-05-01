import { IFilters } from "@/types";
import { AquastoryCell } from "./aquastoryCell";

export const Aquastory = ({ data }: IFilters) => {
 const site = "Aquastory";
 return (
  <div className="flex items-center w-full">
   <div className="w-20 text-sky-200">{site}</div>
   <div className="flex flex-1 py-1 rounded-md ml-2 w-full">
    {data
     .filter((d) => d.website === site)
     .map((el) => (
      <AquastoryCell key={el.title} element={el} />
     ))}
   </div>
  </div>
 );
};
