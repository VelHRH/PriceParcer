import { HeadRowElem } from "./headRowElem";
import { links } from "@/utils/data";
export const HeadRow = () => {
 return (
  <div className="flex items-center">
   <div className="w-20"></div>
   <div className="flex-1 flex py-1 mb-2 ml-2 items-center">
    {links
     .filter((link) => link.website === "Rolfis")
     .map(
      (link) =>
       link.name !== "lamp 12GPM" && (
        <HeadRowElem key={link.link}>{link.name}</HeadRowElem>
       )
     )}
    <div className={`w-25r text-sm text-center text-sky-200`}>lamp 12GPM</div>
   </div>
  </div>
 );
};
