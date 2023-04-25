import { Props } from "@/types";
import { CellDark } from "../cellDark";

export const FF0612AA = ({ data }: Props) => {
 const element = data.find(
  (d) =>
   d.title.toUpperCase().includes("FF06-1/2AA") &&
   d.link.toLowerCase().includes("profimann")
 );
 return (
  <CellDark link={`${element?.link}`} tooltip="Profimann, FF06-1/2AA">
   {element?.price.slice(0, element?.price.indexOf("."))}
  </CellDark>
 );
};
