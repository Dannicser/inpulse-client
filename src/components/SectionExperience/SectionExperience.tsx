import React from "react";

import style from "./SectionExperience.module.css";

import icon1 from "./assets/experience-icon-1.svg";
import icon2 from "./assets/experience-icon-2.svg";
import icon3 from "./assets/experience-icon-3.svg";

import arrow from "./assets/arrow.svg";
import { useTranslation } from "react-i18next";

interface ISectionExperience {
  classes?: string;
}

export const SectionExperience: React.FC<ISectionExperience> = ({ classes = "" }) => {
  const { t, i18n } = useTranslation();

  return (
    <section id="we" className={`${classes}`}>
      <div className={`${style.experience_container}`}>
        {" "}
        <div className={`${style.experience_item}`}>
          <img src={icon3} alt="" className={`${style.experience_item_image}`} />
          <h3 className={`${style.experience_item_name} font-Involve font-medium`}>{t("card_three_title")}</h3>
          <p className={`${style.experience_item_description} ${style.grey} font-Involve font-medium`}>{t("card_three_descr")}</p>{" "}
          <a href="#contacts" className={`${style.arrow_container} transition-opacity duration-500 hover:opacity-50`}>
            <img src={arrow} alt="arrow" className={`${style.experience_item_arrow}`} />{" "}
          </a>
        </div>
        <div className={`${style.experience_item}`}>
          <img src={icon2} alt="" className={`${style.experience_item_image}`} />
          <h3 className={`${style.experience_item_name} font-Involve font-medium`}>{t("card_two_title")}</h3>
          <p className={`${style.experience_item_description} ${style.grey} font-Involve font-medium`}>{t("card_two_descr")}</p>{" "}
          <a href="#contacts" className={`${style.arrow_container} transition-opacity duration-500 hover:opacity-50`}>
            <img src={arrow} alt="arrow" className={`${style.experience_item_arrow}`} />
          </a>
        </div>
        <div className={`${style.experience_item}`}>
          <img src={icon1} alt="" className={`${style.experience_item_image}`} />
          <h3 className={`${style.experience_item_name} font-Involve font-medium`}>{t("card_one_title")}</h3>
          <p className={`${style.experience_item_description} ${style.grey} font-Involve font-medium`}>{t("card_one_descr")}</p>

          <a href="#contacts" className={`${style.arrow_container} transition-opacity duration-500 hover:opacity-50`}>
            <img src={arrow} alt="arrow" className={`${style.experience_item_arrow}`} />
          </a>
        </div>
      </div>
    </section>
  );
};
