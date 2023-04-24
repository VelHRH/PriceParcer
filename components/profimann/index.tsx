import { FF0612AA } from "./ff0612aa";
import { Props } from "@/types";

export const Profimann = ({ data }: Props) => {
 return (
  <div className="flex items-center">
   <div className="w-20">Profimann</div>
   <div className="flex-1 flex py-1 rounded-md ml-2">
    <FF0612AA data={data} />
   </div>
  </div>
 );
};
