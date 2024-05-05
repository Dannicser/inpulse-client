import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import bg_image_desk from "./assets/desktop.png";
import bg_image_tablet from "./assets/tablet.png";
import bg_image_mobile from "./assets/mobile.png";

import style from "./LiquidAnimation.module.css";

interface ILiquidAnimationProps {
  classes?: string;
}

export const LiquidAnimation: React.FC<ILiquidAnimationProps> = ({ classes }) => {
  const { t, i18n } = useTranslation();

  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", onGetCurrentWindowWidth);

    return () => {
      window.removeEventListener("resize", onGetCurrentWindowWidth);
    };
  }, []);

  function onGetCurrentWindowWidth(e: any) {
    setWidth(e.target.innerWidth);
  }

  function selectBackground() {
    if (width >= 800) {
      return bg_image_desk;
    }

    if (width >= 530) {
      return bg_image_tablet;
    }

    return bg_image_mobile;
  }

  return (
    <div id="home" className={`${style.LiquidAnimation} ${classes}`}>
      <img src={selectBackground()} className={`${style.bg_image}`} />

      <div className={`${style.circle_explore}`}>
        <div className={style.circle_explore_text}>
          <div>{t("explore")}</div>
          <div>{t("explore_more")}</div>
        </div>
      </div>
      <div className={`${style.title_container} bottom-[0.5rem]`}>
        <div className={`${style.sub_title_text} font-Involve font-light`}>
          <span className={`max-lg:hidden`}>{t("in_pulse")}</span> {t("pulse_sub_title")}
        </div>
        <div className={`${style.title_text} ${i18n.language === "ru" ? style.title_text_ru : ""} `}>
          {t("where")} <br /> {t("digital")} {t("digital") ? <br /> : ""} <span className={`text-[#E11800]`}>{t("art")} </span>
          {t("in")} <br /> {t("comes")} {t("reality")}
        </div>
      </div>
    </div>
  );
};
