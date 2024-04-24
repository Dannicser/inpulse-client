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
      <div className={`${style.rectangle_bottom} xl:w-[35%] xl:h-[42%] lg:w-[35%] lg:h-[42%] md:w-[39%] md:h-[42%] sm:w-[32%] sm:h-[55%]`}></div>
      <div
        className={`${style.rectangle_top} sm:rounded-[30px] md:rounded-[40px] lg:rounded-[60px] xl:w-[13.2rem] xl:h-[15.625rem] lg:w-[11.5rem] lg:h-[14rem] md:w-[11rem] md:h-[13rem] sm:w-[10rem] sm:h-[13rem]   `}
      ></div>
      <div className={`${style.circle_left} xl:bottom-[13.125rem] lg:bottom-[13.125rem] md:bottom-[13.125rem] sm:bottom-[18.8rem]`}></div>
      <div className={`${style.circle_bottom} xl:left-[34%] lg:left-[34%] md:left-[37%]`}></div>
      <div className={`${style.circle_top} xl:right-[9.7rem] lg:right-[8.01rem] md:right-[7rem] sm:right-[6.5rem]`}></div>
      <div className={`${style.circle_right}  xl:top-[12.25rem] lg:top-[10.5rem] md:top-[9.5rem] sm:top-[9.5rem]`}></div>
      <div
        className={`${style.circle_explore} xl:w-[8.438rem] xl:h-[8.438rem] lg:w-[7.1rem] lg:h-[7.1rem] md:w-[6.2rem] md:h-[6.2rem] sm:w-[5.8752rem] sm:h-[5.875rem]`}
      >
        <div className={style.circle_explore_text}>Explore</div>
      </div>

      <div className={style.title_container}>
        <div className={`xl:text-lg mb-1 font-medium`}>IN PULSE IS THE PLACE</div>
        <div className={`xl:text-5xl font-black lg:text-4xl md:text-3xl`}>
          WHERE <br /> <span className={`text-[#E11800]`}>DIGITAL ART </span>
          <br /> COMES TO LIFE
        </div>
      </div>

      <div className={`max-xl:w-52 max-xl:h-[23rem] sm:w-[10rem] sm:h-[16.875rem] ${style.capsule}`}>
        <img className={`w-[4.250rem]`} src={logo} alt="" />
      </div>
    </div>
  );
};
