import style from "./TitleDivider.module.css";

import decoration from "./assets/decoration.png";
import orange from "./assets/orange.svg";

interface ITitleDivider {
  classes?: string;
}

export const TitleDivider: React.FC<ITitleDivider> = ({ classes = "" }) => {
  return (
    <div className={`${style.TitleDividerWrapper} flex justify-center ${classes}`}>
      <div className={`${style.TitleDivider} w-[33.125rem] flex justify-center flex-col`}>
        <div className={`${style.title} text-[51px] font-bold ml-auto font-RoadRadio`}>REDEFINE BRAND</div>
        <img className={`${style.decoration} w-[20.813rem] h-[3.125rem] `} src={decoration} alt="" />
        <div className={`${style.orange}`}>
          <img src={orange} alt="" />
        </div>

        <div className={`${style.title} text-[51px] font-bold font-RoadRadio`}>EXPERIENCE</div>
      </div>
    </div>
  );
};
