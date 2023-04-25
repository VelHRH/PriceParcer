import { HeadRowElem } from "./headRowElem";
import { links } from "@/utils/data";
export const HeadRow = () => {
 return (
  <div className="flex items-center">
   <div className="w-20"></div>
   <div className="flex-1 flex py-1 mb-2 ml-2 items-center">
    {links.slice(0, 4).map((link) => (
     <HeadRowElem key={link.link}>{link.name}</HeadRowElem>
    ))}
    <HeadRowElem>D04FM-1/2A</HeadRowElem>
    <HeadRowElem>FF06-3/4AA</HeadRowElem>
    <HeadRowElem>S330RL</HeadRowElem>
    <HeadRowElem>S463RL</HeadRowElem>
    <HeadRowElem>S810RL</HeadRowElem>
    <HeadRowElem>S36RL</HeadRowElem>
    <HeadRowElem>S150RL</HeadRowElem>
    <HeadRowElem>S600RL</HeadRowElem>
    <HeadRowElem>VH150</HeadRowElem>
    <HeadRowElem>VH410</HeadRowElem>
    <HeadRowElem>VP600</HeadRowElem>
    <HeadRowElem>UV-0.5GPM</HeadRowElem>
    <HeadRowElem>UV-2GPM</HeadRowElem>
    <HeadRowElem>UV-6GPM</HeadRowElem>
    <HeadRowElem>UV-10GPM</HeadRowElem>
    <HeadRowElem>UV-12GPM</HeadRowElem>
    <HeadRowElem>lamp 0.5GPM</HeadRowElem>
    <HeadRowElem>lamp 2GPM</HeadRowElem>
    <HeadRowElem>lamp 6GPM</HeadRowElem>
    <HeadRowElem>lamp 10GPM</HeadRowElem>
    <div className={`w-25r text-sm text-center`}>lamp 12GPM</div>
   </div>
  </div>
 );
};
