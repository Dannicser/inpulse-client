import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MutableRefObject, useRef } from "react";

import style from "./SectionDo.module.css";

interface ISectionDo {
  classes?: string;
}

export const SectionDo: React.FC<ISectionDo> = ({ classes = "" }) => {
  const [isEffect, setIsEffect] = useState(false);

  const { t, i18n } = useTranslation();

  const timer = useRef(null) as MutableRefObject<any>;

  useEffect(() => {
    window.addEventListener("scroll", useAddEffect);

    return () => {
      window.removeEventListener("scroll", useAddEffect);
    };
  }, []);

  function useAddEffect() {
    if (timer.current) {
      setIsEffect(true);
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      setIsEffect(false);
    }, 1000);
  }

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
        <div className={`${style.do_info} ${isEffect ? `opacity-60` : `opacity-100`} transition-opacity duration-1000 font-Involve font-medium`}>
          <p className={`${style.description}`}>
            {t("do_text_up_left")}
            <span className={`${style.grey}`}> {t("do_text_up_right")}</span>
            <br />
            <br />
            <p className={`${style.grey}`}>{t("do_text")}</p>
          </p>
        </div>
      </div>
    </section>
  );
};
