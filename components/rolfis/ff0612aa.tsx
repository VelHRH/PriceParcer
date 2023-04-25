import { Props } from "@/types";
import { CellLight } from "../cellLight";

export const FF0612AA = ({ data }: Props) => {
 const element = data.find(
  (d) =>
   d.title.toUpperCase().includes("FF06-1/2AA") &&
   d.link.toLowerCase().includes("rolfis")
 );
 return (
  <CellLight link={`${element?.link}`} tooltip="Rolfis, FF06-1/2AA">
   {element?.price}
  </CellLight>
 );
};
