import style from "./TitleDivider.module.css";

import decoration from "./assets/decoration.png";

interface ITitleDivider {
  classes?: string;
}

export const TitleDivider: React.FC<ITitleDivider> = ({ classes = "" }) => {
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
