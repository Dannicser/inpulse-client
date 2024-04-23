import React, { ReactNode } from "react";

interface ILoyoutProps {
  children: ReactNode;
  classes?: string;
}

export const Layout: React.FC<ILoyoutProps> = ({ children, classes = "" }) => {
  return <div className={`container ${classes}`}>{children}</div>;
};
