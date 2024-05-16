import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MutableRefObject, useRef } from "react";

import style from "./SectionDo.module.css";

interface ISectionDo {
  classes?: string;
}

export const SectionDo: React.FC<ISectionDo> = ({ classes = "" }) => {
  const { t, i18n } = useTranslation();

  return (
    <section className={`${classes}`} id={`${style.do}`}>
      <div className={`${style.do_inner}`}>
        <div className={`${style.do_title}`}>
          <span className={`${style.above_title} font-light`}>{t("what")}</span>
          <h3 className={`${style.title}`}>
            {t("we")} <span className={`${style.red}`}> {t("do")}</span>?
          </h3>
        </div>
        <span className={`${style.do_hashtag}`}>
          <span>{t("motto")}</span>
        </span>
        <div className={`${style.do_info} font-Involve font-medium`}>
          <p className={`${style.description}`}>
            {t("do_text_up_left")}
            <span> {t("do_text_up_right")}</span>
            <br />
            <br />
            <p className={`${style.grey}`}>{t("do_text")}</p>
          </p>
        </div>
      </div>
    </section>
  );
};
