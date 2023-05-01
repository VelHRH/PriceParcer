import { IFilters } from "@/types";
import { UkrakvatehCell } from "./ukrakvatehCell";

export const Ukrakvateh = ({ data }: IFilters) => {
 const site = "Ukrakvateh";
 return (
  <div className="flex items-center">
   <div className="w-20 text-sky-200">{site}</div>
   <div className="flex-1 flex bg-slate-800 py-1 rounded-md ml-2 w-full">
    {data
     .filter((d) => d.website === site)
     .map((el) => (
      <UkrakvatehCell key={el.title} element={el} />
     ))}
   </div>
  </div>
 );
};
