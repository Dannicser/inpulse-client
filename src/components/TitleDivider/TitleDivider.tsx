import { useTranslation } from "react-i18next";

import decoration from "./assets/decoration.png";

import style from "./TitleDivider.module.css";

interface ITitleDivider {
  classes?: string;
}

export const TitleDivider: React.FC<ITitleDivider> = ({ classes = "" }) => {
  const { t, i18n } = useTranslation();

  if (i18n.language === "ru") {
    return (
      <div className={style.TitleDividerWrapperRu}>
        <div className={style.TitleDividerContainerRu}>
          <div className={style.TitleUp}>
            <p>Переосмыслите опыт</p>
          </div>
          <div className={style.TitleMiddle}>
            <p>Взаимодействия</p>
          </div>
          <div className={style.TitleDown}>
            <p>С вашим брендом</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${style.TitleDividerWrapper} flex justify-center ${classes}`}>
      <div className={`${style.TitleDivider} w-[33.125rem] flex justify-center flex-col`}>
        <div className={`${style.title} font-bold ml-auto font-RoadRadio`}>REDEFINE BRAND</div>
        <img className={`${style.decoration}`} src={decoration} alt="" />

        <div className={`${style.title} ${style.experience} font-bold font-RoadRadio`}>EXPERIENCE</div>
      </div>
    </div>
  );
};
