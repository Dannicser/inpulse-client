import React from "react";

import style from "./LiquidAnimation.module.css";

interface ILiquidAnimationProps {
  classes?: string;
}

export const LiquidAnimation: React.FC<ILiquidAnimationProps> = ({ classes }) => {
  return (
    <div className={`${style.LiquidAnimation} ${classes}`}>
      <div className={style.rectangle}></div>

      <div className={style.rectangle_bottom}></div>
      <div className={style.rectangle_top}></div>
      <div className={style.circle_left}></div>
      <div className={style.circle_bottom}></div>
      <div className={style.circle_top}></div>
      <div className={style.circle_right}></div>
    </div>
  );
};
