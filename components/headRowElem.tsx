import React from "react";

export const HeadRowElem = ({ children }: { children: React.ReactNode }) => {
 return (
  <div
   className={`border-r-2 border-slate-800 w-25r text-sm text-center text-yellow-200`}
  >
   {children}
  </div>
 );
};
