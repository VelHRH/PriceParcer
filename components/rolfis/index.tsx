import { FF0612AA } from "./ff0612aa";
import { FF0612AAM } from "./ff0612aam";
import { Props } from "@/types";

export const Rolfis = ({ data }: Props) => {
 return (
  <div className="flex items-center">
   <div>Rolfis</div>
   <div className="flex-1 flex bg-slate-800 py-1 rounded-md ml-2">
    <FF0612AA data={data} />
    <FF0612AAM data={data} />
   </div>
  </div>
 );
};
