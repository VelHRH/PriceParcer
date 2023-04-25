import React from "react";

export const HeadRowElem = ({ children }: { children: React.ReactNode }) => {
 return (
  <div
   className={`border-r-2 border-slate-800 w-[${
    100 / parseInt(process.env.MODELS || "25", 10)
   }%] text-sm text-center`}
  >
   {children}
  </div>
 );
};
