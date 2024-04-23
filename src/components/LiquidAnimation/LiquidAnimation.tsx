import React from "react";

import { useSpring, animated } from "@react-spring/web";

import logo from "./assets/logo.svg";

import style from "./LiquidAnimation.module.css";

interface ILiquidAnimationProps {
  classes?: string;
}

export const LiquidAnimation: React.FC<ILiquidAnimationProps> = ({ classes }) => {
  const effect = useSpring({
    loop: true,
    config: { duration: 5000 },
    from: {
      background: `linear-gradient(red, transparent),
      linear-gradient(to top left, lime, transparent),
      linear-gradient(to top right, blue, transparent)`,
    },

    to: [
      {
        background: `linear-gradient(red, transparent),
		linear-gradient(to top right, blue, transparent),
		linear-gradient(to top left, lime, transparent)`,
      },
    ],
  });

  return (
    <div className={`${style.LiquidAnimation} ${classes}`}>
      <animated.div style={effect} className={style.rectangle}></animated.div>
      <div className={style.rectangle_bottom}></div>
      <div className={style.rectangle_top}></div>
      <div className={style.circle_left}></div>
      <div className={style.circle_bottom}></div>
      <div className={style.circle_top}></div>
      <div className={style.circle_right}></div>
      <div className={`w-52 h-[23rem] ${style.capsule}`}>
        <img className={`w-[4.250rem]`} src={logo} alt="" />
      </div>
      <div className={`${style.circle_explore} w-[8.438rem] h-[8.438rem]`}>
        <div className={style.circle_explore_text}>Explore</div>
      </div>

      <div className={style.title_container}>
        <div className={`text-lg mb-3 font-medium`}>IN PULSE IS THE PLACE</div>
        <div className={`2xl:text-5xl font-black xl:text-5xl md:text-4xl`}>
          WHERE <br /> <span className={`text-[#E11800]`}>DIGITAL ART </span>
          <br /> COMES TO LIFE
        </div>
      </div>
    </div>
  );
};
