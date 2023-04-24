import Tippy from "@tippyjs/react";
import { Props } from "@/types";
import Link from "next/link";

export const FF0612AA = ({ data }: Props) => {
 const element = data.find(
  (d) =>
   d.title.toUpperCase().includes("FF06-1/2AA") &&
   d.link.toLowerCase().includes("rolfis")
 );
 return (
  <Tippy content="Rolfis, FF06-1/2AA" animation="scale" arrow={true}>
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
