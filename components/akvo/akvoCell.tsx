import { IFilter } from "@/types";
import { CellDark } from "../cellDark";

export const AkvoCell = ({ element }: { element: IFilter }) => {
 return (
  <CellDark
   link={`${element.link}`}
   tooltip={`${element.website}, ${element.title}`}
   normalPrice={`${element.normalPrice}`}
  >
   {element?.price
    .slice(element?.price.indexOf(" "), element?.price.indexOf("г"))
    .replace(/\s/g, "")}
  </CellDark>
 );
};
