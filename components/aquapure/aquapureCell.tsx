import { IFilter } from "@/types";
import { CellLight } from "../cellLight";

export const AquapureCell = ({ element }: { element: IFilter }) => {
 return (
  <CellLight
   link={`${element.link}`}
   tooltip={`${element.website}, ${element.title}`}
   normalPrice={`${element.normalPrice}`}
  >
   {element?.price.slice(0, element.price.indexOf("."))}
  </CellLight>
 );
};
