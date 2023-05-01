import { IFilters } from "@/types";
import { VodavdomCell } from "./vodavdomCell";

export const Vodavdom = ({ data }: IFilters) => {
 const site = "Vodavdom";
 return (
  <div className="flex items-center">
   <div className="w-20 text-sky-200">{site}</div>
   <div className="flex-1 flex py-1 rounded-md ml-2 w-full">
    {data
     .filter((d) => d.website === site)
     .map((el) => (
      <VodavdomCell key={el.title} element={el} />
     ))}
   </div>
  </div>
 );
};
