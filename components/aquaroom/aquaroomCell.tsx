// @ts-nocheck
import { IFilter } from "@/types";
import { CellLight } from "../cellLight";

export const AquaroomCell = ({ element }: { element: IFilter }) => {
 return (
  <CellLight
   link={`${element.link}`}
   tooltip={`${element.website}, ${element.title}`}
   normalPrice={`${element.normalPrice}`}
  >
   {element?.price.slice(0, element?.price.indexOf("Г")).replace(/,/g, "")}
  </CellLight>
 );
};
