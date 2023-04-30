import { IFilter } from "@/types";
import { CellLight } from "../cellLight";

export const UkrakvatehCell = ({ element }: { element: IFilter }) => {
 return (
  <CellLight
   link={`${element.link}`}
   tooltip={`${element.website}, ${element.title}`}
   normalPrice={`${element.normalPrice}`}
  >
   {element?.price.replace(/\s/g, "")}
  </CellLight>
 );
};
