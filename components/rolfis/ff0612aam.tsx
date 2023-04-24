import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { Props } from "@/types";

export const FF0612AAM = ({ data }: Props) => {
 const elemet = data.find(
  (d) =>
   d.title.toUpperCase().includes("FF06-1/2AAM") &&
   d.link.toLowerCase().includes("rolfis")
 );
 return (
  <Tippy content="Rolfis, FF06-1/2AAM" animation="scale" arrow={true}>
   <div
    className={`cursor-pointer border-r-2 border-slate-700 w-[calc(100%/${process.env.NEXT_PUBLIC_MODELS})] text-center`}
   >
    {elemet?.price}
   </div>
  </Tippy>
 );
};
