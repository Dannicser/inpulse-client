import React from "react";

import { useSpring, animated } from "@react-spring/web";

import logo from "./assets/logo.svg";
import promo from "./assets/promo.svg";

import style from "./LiquidAnimation.module.css";

interface ILiquidAnimationProps {
  classes?: string;
}

export const LiquidAnimation: React.FC<ILiquidAnimationProps> = ({ classes }) => {
  const effect = useSpring({
    loop: true,
    config: { duration: 4000 },
    from: {
      background: `linear-gradient(to right, #f00, #ffa500, #ff0, #008000, #00f, #4b0082, #ee82ee)`,
    },

    // to: [
    //   {
    //     background: `linear-gradient(to left, #ee82ee, #4b0082, #f00, #ffa500, #ff0, #008000, #00f )`,
    //   },
    // ],
  });

  return (
    <div className={`${style.LiquidAnimation} ${classes}`}>
      <animated.div
        style={effect}
        className={`${style.rectangle} w-full xl:h-[42.188rem] lg:h-[42.188rem] md:h-[42.188rem] sm:h-[31.25rem] xs:h-[31.25rem] us:h-[46.875rem]`}
      ></animated.div>
      <div
        className={`${style.rectangle_bottom} us:rounded-[30px] xs:rounded-[30px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[40px] xl:rounded-tr-[50px] xl:w-[35%] xl:h-[42%] lg:w-[35%] lg:h-[42%] md:w-[39%] md:h-[42%] sm:w-[32%] sm:h-[47%] xs:w-[32%] xs:h-[47%] us:w-[53%] us:h-[31%]`}
      ></div>
      <div
        className={`${style.rectangle_top} us:right-[-1.125rem] xs:right-[-1.125rem] sm:right-[-1.125rem] md:right-[-3.625rem] lg:right-[-3.125rem] xl:right-[-3.125rem] us:rounded-[40px] xs:rounded-[30px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[60px] xl:w-[13.2rem] xl:h-[15.625rem] lg:w-[11.5rem] lg:h-[14rem] md:w-[11rem] md:h-[13rem] sm:w-[8rem] sm:h-[13rem] xs:w-[8rem] xs:h-[13rem] us:w-[8rem] us:h-[13rem]`}
      ></div>
      <div
        className={`${style.circle_left} xl:bottom-[13.125rem] lg:bottom-[13.125rem] md:bottom-[13.125rem] sm:bottom-[10.1rem] xs:bottom-[10.1rem] us:bottom-[10.1rem]`}
      ></div>
      <div className={`${style.circle_bottom} xl:left-[34%] lg:left-[34%] md:left-[37%] xs:left-[37%] us:left-[37%]`}></div>
      <div
        className={`${style.circle_top} xl:right-[9.7rem] lg:right-[8.01rem] md:right-[7rem] sm:right-[6.5rem] xs:right-[6.5rem] us:right-[6.5rem]`}
      ></div>
      <div
        className={`${style.circle_right}  xl:top-[12.25rem] lg:top-[10.5rem] md:top-[9.5rem] sm:top-[9.5rem] xs:top-[9.5rem] us:top-[9.5rem]`}
      ></div>

      <div
        className={`${style.mobile_rectangle_bottom} rounded-tr-[2.5rem] xs:left-[25%] sm:left-[25%] us:left-[25%] md:hidden sm:w-[25%] sm:h-[20%] xs:w-[25%] xs:h-[20%] us:w-[50%] us:h-[14%]`}
      ></div>
      <div
        className={`${style.mobile_circle_middle} md:hidden sm:left-[30%] xs:left-[29%] us:left-[49%] sm:bottom-[5.313rem] xs:bottom-[5.313rem] us:bottom-[5.5rem]`}
      ></div>
      <div className={`${style.mobile_circle_bottom} md:hidden sm:left-[49%] xs:left-[48%] us:left-[72.9%]`}></div>

      <div
        className={`${style.circle_explore} xl:w-[8.438rem] xl:h-[8.438rem] lg:w-[7.1rem] lg:h-[7.1rem] md:w-[6.2rem] md:h-[6.2rem] sm:w-[5.8752rem] sm:h-[5.875rem] xs:w-[5.8752rem] xs:h-[5.875rem]  us:w-[5.8752rem] us:h-[5.875rem]`}
      >
        <div className={style.circle_explore_text}>Explore</div>
      </div>
      <div className={`${style.title_container} bottom-[1rem]`}>
        <div className={`lg:text-lg md:text-lg sm:text-sm xs:text-xs us:text-xs mb-1 font-medium`}>IN PULSE IS THE PLACE</div>
        <div className={`${style.title_text} xl:text-5xl lg:text-4xl md:text-3xl sm:text-4xl xs:text-3xl us:text-3xl font-black`}>
          WHERE <br /> <span className={`text-[#E11800]`}>DIGITAL ART </span>
          <br /> COMES TO LIFE
        </div>
      </div>
      <div
        className={`${style.capsule} xl:top-[2.5rem] lg:top-[2.5rem] md:top-[2.5rem] sm:top-[1.5rem] xs:top-[1.5rem] us:top-[1.5rem] xl:w-52 xl:h-[23rem] lg:w-52 lg:h-[23rem] md:w-52 md:h-[23rem] sm:w-[10rem] sm:h-[16.875rem] xs:w-[10rem] xs:h-[16.875rem] us:w-[9.875rem] us:h-[16.875rem]`}
      >
        <img className={`w-[4.250rem]`} src={logo} alt="" />
      </div>

      <div
        className={`${style.logo_container} opacity-75 us:right-0 us:bottom-[12rem] xs:right-0 xs:bottom-0 sm:right-0 sm:bottom-0 md:right-0 md:bottom-0 lg:right-0 lg:bottom-0 xl:right-0 xl:bottom-0 xl:mb-[3.75rem] lg:mb-[3rem] md:mb-[2.5rem] sm:mb-[2rem] xs:mb-[2rem] us:mb-[2rem] xl:mr-[3.75rem] lg:mr-[3rem] md:mr-[2.5rem] sm:mr-[2rem] xs:mr-[1.2rem] us:mx-0`}
      >
        <div>
          <img className={`mb-2 lg:w-[7.688rem] md:w-[7.688rem] sm:w-[5.25rem] xs:w-[5.25rem] us:w-[5.25rem] ml-auto`} src={logo} alt="" />
          <img className={`${style.promo} xl:w-[26rem] lg:w-[22rem] md:w-[20rem] sm:w-[15rem] xs:w-[12rem] us:w-[17.188rem]`} src={promo} alt="" />
        </div>
      </div>
    </div>
  );
};
