import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import bg_image_desk from "./assets/desktop.png";
import bg_image_tablet from "./assets/tablet.png";
import bg_image_mobile from "./assets/mobile.png";
import lock from "./assets/lock.svg";

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

  function engText() {
    return (
      <>
        <div className={`${style.sub_title_text}`}>
          {width >= 800 ? (
            <>
              {t("in_pulse_is_a_global")} {t("event_agency")}
            </>
          ) : (
            <>
              {t("in_pulse_is_a_global")} <br /> {t("event_agency")}
            </>
          )}
        </div>
        {width >= 529 ? (
          <>
            <div className={`${style.title_text_en}`}>
              {t("bridging")} <br /> {t("cultures")} {t("to")}
              <span> {t("create")}</span> <br />
              <span className={`text-[#E11800]`}>{t("effective")}</span> {t("business")} <br /> {t("solutions")}
            </div>
          </>
        ) : (
          <>
            <div className={`${style.title_text_en}`}>
              {t("bridging")} <br /> {t("cultures")} {t("to")} <br />
              <span> {t("create")}</span>
              <span className={`text-[#E11800]`}> {t("effective")}</span> <br /> {t("business")} <br /> {t("solutions")}
            </div>
          </>
        )}
      </>
    );
  }

  function ruText() {
    return (
      <div className={`${style.sub_title_text}`}>
        {width >= 800 ? (
          <>
            {t("in_pulse_is_a_global")} {t("event_agency")}
          </>
        ) : (
          <>
            {t("in_pulse_is_a_global")} <br /> {t("event_agency")}
          </>
        )}
        <>
          <div className={`${style.title_text_en}`}>
            <span> {t("create")}</span>
            <br />
            <span className={`text-[#E11800]`}>{t("unstandart")}</span>
            <br />
            {t("business")}-{t("solutions")}
            <br />
            {t("joint")} {t("culture")}
          </div>
        </>
      </div>
    );
  }

  return (
    <div id="home" className={`${style.LiquidAnimation} ${classes}`}>
      <img src={selectBackground()} className={`${style.bg_image}`} />
      <div className={`${style.circle_explore}`}>
        <div className={`${style.circle_explore_text}`}>
          <div>{t("explore")}</div>
          <div>{t("explore_more")}</div>
        </div>
        <img src={lock} className={style.circle_explore_lock} alt="" />
      </div>
      <div className={`${style.title_container}`}>{i18n.language === "ru" ? ruText() : engText()}</div>
    </div>
  );
};
