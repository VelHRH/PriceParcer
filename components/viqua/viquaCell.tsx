import { IFilter } from "@/types";
import { CellDark } from "../cellDark";

export const ViquaCell = ({ element }: { element: IFilter }) => {
 return (
  <CellDark
   link={`${element.link}`}
   tooltip={`${element.website}, ${element.title}`}
   normalPrice={`${element.normalPrice}`}
  >
   {element?.price.replace(/\s/g, "")}
  </CellDark>
 );
};
