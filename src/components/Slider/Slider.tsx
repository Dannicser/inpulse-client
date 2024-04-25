import React from "react";

import style from "./Slider.module.css";

interface ISlider {
  classes?: string;
}

export const Slider: React.FC<ISlider> = ({ classes = "" }) => {
  return <div className={`${style.Slider} w-full h-[27.5rem] ${classes}`}></div>;
};
