import { IFilter } from "@/types";
import { CellDark } from "../cellDark";

export const EdobroCell = ({ element }: { element: IFilter }) => {
 return (
  <CellDark
   link={`${element.link}`}
   tooltip={`${element.website}, ${element.title}`}
   normalPrice={`${element.normalPrice}`}
  >
   {element?.price.slice(0, element?.price.indexOf("г"))}
  </CellDark>
 );
};
