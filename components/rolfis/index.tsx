import { FF0612AA } from "./ff0612aa";
import { FF0612AAM } from "./ff0612aam";
import { Props } from "@/types";
import { FK0612AA } from "./fk0612aa";
import { FK0612AAM } from "./fk0612aam";

export const Rolfis = ({ data }: Props) => {
 return (
  <div className="flex items-center">
   <div className="w-20">Rolfis</div>
   <div className="flex-1 flex bg-slate-800 py-1 rounded-md ml-2">
    <FF0612AA data={data} />
    <FF0612AAM data={data} />
    <FK0612AA data={data} />
    <FK0612AAM data={data} />
   </div>
  </div>
 );
};
