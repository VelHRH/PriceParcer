import Tippy from "@tippyjs/react";
import "react-tippy/dist/tippy.css";
import { Props } from "@/types";

export const FF0612AA = ({ data }: Props) => {
 const elemet = data.find(
  (d) =>
   d.title.toUpperCase().includes("FF06-1/2AA") &&
   d.link.toLowerCase().includes("rolfis")
 );
 return (
  <Tippy content="Rolfis, FF06-1/2AA" animation="scale" arrow={true}>
   <div
    className={`cursor-pointer border-r-2 border-slate-700 w-[calc(100%/${process.env.NEXT_PUBLIC_MODELS})] text-center`}
   >
    {elemet?.price}
   </div>
  </Tippy>
 );
};
