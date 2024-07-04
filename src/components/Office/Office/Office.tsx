import React from "react";

import { useTranslation } from "react-i18next";

import { Slider } from "../Slider/Slider";

import picture from "../assets/picture.jpg";

import style from "./Office.module.css";

interface IOfficeProps {
  classes?: string;
}

export const Office: React.FC<IOfficeProps> = ({ classes }) => {
  const { t, i18n } = useTranslation();

  return (
    <section className={`${style.container} ${classes}`}>
      <div className={style.text}>
        <div className={style.title}>
          <span className={style.title_up}>{t("our_main")}</span> <br />
          <span className={style.title_middle}>{t("office")} </span>
          <br />
          <span className={style.title_down}>{t("new_york")}</span>
        </div>
        <div className={style.desc}>{t("office_desc")}</div>
      </div>
      <div className={style.slider}>
        <Slider />
        <div className={style.picture}>
          <img src={picture} alt="" />
        </div>
      </div>
    </section>
  );
};
