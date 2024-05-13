import React from "react";

import { useTranslation } from "react-i18next";

import style from "./SectionBenefits.module.css";

import oneImg from "./assets/one.png";
import twoImg from "./assets/two.png";
import threeImg from "./assets/three.png";
import fourImg from "./assets/four.png";
import fiveImg from "./assets/five.png";
import fiveTabletImg from "./assets/five_tablet.png";
import arrow from "./assets/arrow.svg";

export const SectionBenefits: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="forwhom" className={style.benefits}>
      <div className={style.benefits_title}>
        <span className={style.above_title}>{t("whatare")}</span>
        <h3 className={style.title}>
          <span className={style.red}>{t("benefits")}</span> {t("it")}
          <br /> {t("forme")}
        </h3>
      </div>

      <div className={style.hashtags}>
        <div className={style.hashtags_line}>
          <span className={style.hashtags_item}>{t("interactive")}</span>
          <span className={style.hashtags_item}>{t("digitalart")}</span>
          <span className={style.hashtags_item}>{t("inpulse")}</span>
        </div>
        <div className={style.hashtags_line}>
          <span className={style.hashtags_item}>{t("info")}</span>
          <span className={style.hashtags_item}>{t("cases")}</span>
        </div>
      </div>

      <div className={style.pictures}>
        <Card src={oneImg} number={1} caption={`${t("ben_card_one")}`} />
        <Card src={twoImg} number={2} caption={`${t("ben_card_two")}`} />
        <Card src={threeImg} number={3} caption={`${t("ben_card_three")}`} />
        <Card src={fourImg} number={4} caption={`${t("ben_card_four")}`} />
        <Card src={fiveImg} number={5} caption={`${t("ben_card_five")}`} classes={style.card_desktop} />
        <Card src={fiveTabletImg} number={5} caption={`${t("ben_card_five")}`} classes={style.card_mobile} />
      </div>

      <button className={style.button}>
        <span className={style.button_text}>{t("getintouch")}</span>
        <img className={style.button_img} src={arrow} alt="arrow" />
      </button>
    </section>
  );
};

interface CardProps {
  src: string;
  caption: string;
  number: number;
  classes?: string;
}

const Card: React.FC<CardProps> = ({ src, caption, number, classes }) => {
  return (
    <div className={`${style.card} ${classes}`}>
      <div className={style.card_img_wrapper}>
        <img className={style.card_img} src={src} alt={number + " photo"} />
      </div>
      <div className={style.card_caption}>{caption}</div>
    </div>
  );
};
