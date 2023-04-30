import { IFilter } from "@/types";
import { CellLight } from "../cellLight";

export const SmartfilterCell = ({ element }: { element: IFilter }) => {
 return (
  <CellLight
   link={`${element.link}`}
   tooltip={`${element.website}, ${element.title}`}
   normalPrice={`${element.normalPrice}`}
  >
   {element?.price
    .slice(element?.price.indexOf("ce") + 2, element?.price.indexOf(","))
    .replace(/\s/g, "")}
  </CellLight>
 );
};
