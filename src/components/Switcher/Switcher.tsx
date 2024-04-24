import React from "react";

export const Switcher: React.FC = () => {
  return (
    <div className={`z-10`}>
      <span className={`mr-4 font-semibold`}>ENG</span>
      <span className={`text-primary font-semibold`}>RUS</span>
    </div>
  );
};
