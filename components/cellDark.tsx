import Link from "next/link";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

export const CellDark = ({
 link,
 children,
 tooltip,
 normalPrice,
}: {
 link: string;
 children: React.ReactNode;
 tooltip: string;
 normalPrice: string;
}) => {
 return (
  <Tippy content={`${tooltip}`} animation="scale" arrow={true}>
   <Link
    href={`${link}`}
    rel="noopener noreferrer"
    target="_blank"
    className={`cursor-pointer border-r-2 border-slate-800 w-[calc(100%/${process.env.MODELS})] text-center`}
   >
    {children}
   </Link>
  </Tippy>
 );
};
