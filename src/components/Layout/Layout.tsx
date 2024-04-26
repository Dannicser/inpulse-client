import React, { ReactNode } from "react";

interface ILoyoutProps {
  children: ReactNode;
  classes?: string;
}

export const Layout: React.FC<ILoyoutProps> = ({ children, classes = "" }) => {
  return (
    <div className={`${classes} flex justify-center`}>
      <div className={`w-[1198px]`}>{children}</div>
    </div>
  );
};
