// @ts-nocheck
import { IFilter } from "@/types";
import { CellLight } from "../cellLight";

export const YvkCell = ({ element }: { element: IFilter }) => {
 return (
  <CellLight
   link={`${element.link}`}
   tooltip={`${element.website}, ${element.title}`}
   normalPrice={`${element.normalPrice}`}
  >
   {element?.price.includes("€")
    ? element?.price.slice(0, element?.price.indexOf("."))
    : !element?.price.includes("уточняйте") &&
      element?.price
       .replace(/\s/g, "")
       .slice(
        element?.price.replace(/\s/g, "").indexOf("цена") + 5,
        element?.price.replace(/\s/g, "").indexOf("грн") - 3
       )}
  </CellLight>
 );
};
