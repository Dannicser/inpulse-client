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
    <section className={`${classes} lg:mx-[5rem] max-md:mx-[0rem]`} id={`${style.do}`}>
      <div className={`${style.do_inner}`}>
        <div className={`${style.do_inner_container}`}>
          <div className={`${style.do_title}`}>
            <span className={`${style.above_title} font-light`}></span>
            <h3 className={`${style.title}`}>
              {t("our")} <br />
              <span className={`${style.red}`}> {t("mission")}</span>
            </h3>
          </div>
          <span className={`${style.do_hashtag}`}>
            <span>{t("motto")}</span>
          </span>
        </div>
        <div className={`${style.do_info} font-Involve font-medium`}>
          <p className={`${style.description}`}>
            {t("our_mission_text")}
            <br />
            <br />
            {/* <p className={`${style.grey}`}>{t("do_text_down")}</p> */}
          </p>
        </div>
      </div>
    </section>
  );
};
