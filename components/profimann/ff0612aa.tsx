import Tippy from "@tippyjs/react";
import "react-tippy/dist/tippy.css";
import { Props } from "@/types";
import Link from "next/link";

export const FF0612AA = ({ data }: Props) => {
 const element = data.find(
  (d) =>
   d.title.toUpperCase().includes("FF06-1/2AA") &&
   d.link.toLowerCase().includes("profimann")
 );
 return (
  <Tippy content="Profimann, FF06-1/2AA" animation="scale" arrow={true}>
   <Link
    href={`${element?.link}`}
    rel="noopener noreferrer"
    target="_blank"
    className={`cursor-pointer border-r-2 border-slate-800 w-[calc(100%/${process.env.NEXT_PUBLIC_MODELS})] text-center`}
   >
    {element?.price.slice(0, element?.price.indexOf("."))}
   </Link>
  </Tippy>
 );
};
