import Tippy from "@tippyjs/react";
import { Props } from "@/types";
import Link from "next/link";

export const FK0612AA = ({ data }: Props) => {
 const element = data.find(
  (d) =>
   d.title.toUpperCase().includes("FK06-1/2AA") &&
   d.link.toLowerCase().includes("rolfis")
 );
 return (
  <Tippy content="Rolfis, FK06-1/2AA" animation="scale" arrow={true}>
   <Link
    href={`${element?.link}`}
    rel="noopener noreferrer"
    target="_blank"
    className={`cursor-pointer border-r-2 border-slate-700 w-[calc(100%/${process.env.NEXT_PUBLIC_MODELS})] text-center`}
   >
    {element?.price}
   </Link>
  </Tippy>
 );
};
