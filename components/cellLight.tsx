import Link from "next/link";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

export const CellLight = ({
 link,
 children,
 tooltip,
 normalPrice,
}: {
 link: string;
 children: string;
 tooltip: string;
 normalPrice: string;
}) => {
 return (
  <Tippy
   content={`${tooltip}`}
   animation="scale"
   arrow={true}
   className="w-full"
  >
   <Link
    href={`${link}`}
    rel="noopener noreferrer"
    target="_blank"
    className={`cursor-pointer border-r-2 border-slate-700 w-25r text-center ${
     parseFloat(children.toString().replace(/\s/g, "")) >
      parseFloat(normalPrice.toString().replace(/\s/g, "")) * 1.05 &&
     "text-green-400"
    } ${
     parseFloat(children.toString().replace(/\s/g, "")) <
      parseFloat(normalPrice.toString().replace(/\s/g, "")) * 0.95 &&
     "text-red-400"
    }`}
   >
    {children}
   </Link>
  </Tippy>
 );
};
