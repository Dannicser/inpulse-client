import React from "react";

import { useTranslation } from "react-i18next";

import { useSpring, animated } from "@react-spring/web";

import logo from "./assets/logo.svg";
import promo from "./assets/promo.svg";
import bg_image from "./assets/bg_image.png";
import oval from "./assets/oval.png";

import style from "./LiquidAnimation.module.css";

interface ILiquidAnimationProps {
  classes?: string;
}

export const LiquidAnimation: React.FC<ILiquidAnimationProps> = ({ classes }) => {
  const { t, i18n } = useTranslation();

  const effect = useSpring({
    loop: true,
    config: { duration: 4000 },
    from: {
      background: "black",
    },
  });

  return (
    <div id="home" className={`${style.LiquidAnimation} ${classes}`}>
      <animated.div
        style={effect}
        className={`${style.rectangle} w-full xl:h-[42.188rem] lg:h-[42.188rem] md:h-[42.188rem] sm:h-[31.25rem] xs:h-[31.25rem] us:h-[46.875rem]`}
      >
        <img src={bg_image} className={`${style.bg_image}`} />
      </animated.div>
      <div
        className={`${style.rectangle_bottom} us:rounded-[30px] xs:rounded-[30px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[40px] xl:rounded-tr-[50px] xl:w-[37%] xl:h-[42%] lg:w-[35%] lg:h-[42%] md:w-[38%] md:h-[42%] sm:w-[34%] sm:h-[47%] xs:w-[32%] xs:h-[47%] us:w-[53%] us:h-[31%]`}
      ></div>
      <div
        className={`${style.rectangle_top} us:right-[-1.125rem] xs:right-[-1.125rem] sm:right-[-1.125rem] md:right-[-3.625rem] lg:right-[-3.125rem] xl:right-[-3.125rem] us:rounded-[40px] xs:rounded-[30px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[55px] xl:w-[13.2rem] xl:h-[15.625rem] lg:w-[11.5rem] lg:h-[14rem] md:w-[11rem] md:h-[13rem] sm:w-[8rem] sm:h-[13rem] xs:w-[8rem] xs:h-[13rem] us:w-[8rem] us:h-[13rem]`}
      ></div>
      <div
        className={`${style.circle_left} xl:bottom-[13.125rem] lg:bottom-[13.125rem] md:bottom-[13.125rem] sm:bottom-[10.1rem] xs:bottom-[10.1rem] us:bottom-[10.1rem]`}
      ></div>
      <div className={`${style.circle_bottom} xl:left-[36%] lg:left-[34%] md:left-[36.5%] xs:left-[37%] us:left-[37%]`}></div>
      <div
        className={`${style.circle_top} xl:right-[9.7rem] lg:right-[8.01rem] md:right-[7rem] sm:right-[6.5rem] xs:right-[6.5rem] us:right-[6.5rem]`}
      ></div>
      <div
        className={`${style.circle_right}  xl:top-[12.20rem] lg:top-[12rem] md:top-[9.5rem] sm:top-[9.5rem] xs:top-[9.5rem] us:top-[9.5rem]`}
      ></div>

      <div
        className={`${style.mobile_rectangle_bottom} rounded-tr-[2.5rem] xs:left-[25%] sm:left-[25%] us:left-[25%] md:hidden sm:w-[25%] sm:h-[20%] xs:w-[25%] xs:h-[20%] us:w-[50%] us:h-[14%]`}
      ></div>
      <div
        className={`${style.mobile_circle_middle} md:hidden sm:left-[32%] xs:left-[29%]  sm:bottom-[5.313rem] xs:bottom-[5.313rem] us:bottom-[5.5rem]`}
      ></div>
      <div className={`${style.mobile_circle_bottom} md:hidden sm:left-[49%] xs:left-[48%] us:left-[72.9%]`}></div>

      <div
        className={`${style.circle_explore} xl:w-[8.438rem] xl:h-[8.438rem] lg:w-[7.5rem] lg:h-[7.5rem] md:w-[6.2rem] md:h-[6.2rem] sm:w-[5.8752rem] sm:h-[5.875rem] xs:w-[5.8752rem] xs:h-[5.875rem]  us:w-[5.8752rem] us:h-[5.875rem]`}
      >
        <div className={style.circle_explore_text}>
          <div>{t("explore")}</div>
          <div>{t("explore_more")}</div>
        </div>
      </div>
      <div className={`${style.title_container} bottom-[1.3rem]`}>
        <div className={`${style.sub_title_text} font-Involve font-light`}>
          <span className={`max-lg:hidden`}>{t("in_pulse")}</span> {t("pulse_sub_title")}
        </div>
        <div className={`${style.title_text} ${i18n.language === "ru" ? style.title_text_ru : ""} `}>
          {t("where")} <br /> {t("digital")} {t("digital") ? <br /> : ""} <span className={`text-[#E11800]`}>{t("art")} </span>
          {t("in")} <br /> {t("comes")} {t("reality")}
        </div>
      </div>

      <div
        className={`${style.capsule} xl:top-[8.5rem] lg:top-[8.5rem] md:top-[8.5rem] sm:top-[4.5rem] xs:top-[2rem] us:top-[1.5rem] xl:w-52 xl:h-[23rem] lg:w-52 lg:h-[23rem] md:w-52 md:h-[23rem] sm:w-[10rem] sm:h-[16.875rem] xs:w-[10rem] xs:h-[16.875rem] us:w-[48%] us:h-[16.875rem]`}
      >
        <img className={`w-[4.250rem]`} src={logo} alt="" />
      </div>

      <div className={`${style.stay} max-lg:hidden`}>STAY</div>
      <div className={`${style.pulse} max-lg:hidden`}>PULSE</div>
      <div className={`${style.oval} max-lg:hidden`}>
        <img src={oval} alt="" />
      </div>
      <div className={`${style.n} max-lg:hidden`}>N</div>

      <div
        className={`${style.logo_container} lg:hidden opacity-75 us:right-0 us:bottom-[12rem] xs:right-0 xs:bottom-0 sm:right-0 sm:bottom-0 md:right-0 md:bottom-0 lg:right-0 lg:bottom-0 xl:right-0 xl:bottom-0 xl:mb-[3.75rem] lg:mb-[3rem] md:mb-[2.5rem] sm:mb-[2rem] xs:mb-[2rem] us:mb-[2rem] xl:mr-[3.75rem] lg:mr-[3rem] md:mr-[2.5rem] sm:mr-[2rem] xs:mr-[1rem] us:mx-0`}
      >
        <div>
          <img className={`mb-2 lg:w-[7.688rem] md:w-[7.688rem] sm:w-[5.25rem] xs:w-[5.25rem] us:w-[5.25rem] ml-auto`} src={logo} alt="" />
          <img className={`${style.promo} xl:w-[26rem] lg:w-[22rem] md:w-[20rem] sm:w-[15rem] xs:w-[11rem] us:w-[15.188rem]`} src={promo} alt="" />
        </div>
      </div>
    </div>
  );
};
