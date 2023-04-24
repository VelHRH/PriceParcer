import React from "react";

export const HeadRowElem = ({ children }: { children: React.ReactNode }) => {
 return (
  <div
   className={`border-r-2 border-slate-800 w-[calc(100%/25)] text-sm text-center`}
  >
   {children}
  </div>
 );
};
