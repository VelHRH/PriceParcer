import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { Props } from "@/types";
import Link from "next/link";

export const FF0612AAM = ({ data }: Props) => {
 const element = data.find(
  (d) =>
   d.title.toUpperCase().includes("FF06-1/2AAM") &&
   d.link.toLowerCase().includes("rolfis")
 );
 return (
  <Tippy content="Rolfis, FF06-1/2AAM" animation="scale" arrow={true}>
   <Link
    href={`${element?.link}`}
    rel="noopener noreferrer"
    target="_blank"
    className={`cursor-pointer border-r-2 border-slate-700 w-[calc(100%/25)] text-center`}
   >
    {element?.price}
   </Link>
  </Tippy>
 );
};
