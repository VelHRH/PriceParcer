import { IFilter } from "@/types";
import { CellLight } from "../cellLight";

export const RolfisCell = ({ element }: { element: IFilter }) => {
 return (
  <CellLight
   link={`${element.link}`}
   tooltip={`${element.website}, ${element.title}`}
   normalPrice={`${element.normalPrice}`}
  >
   {element.price}
  </CellLight>
 );
};
