import style from "./TitleDivider.module.css";

import decoration from "./assets/decoration.png";
import orange from "./assets/orange.png";

interface ITitleDivider {
  classes?: string;
}

export const TitleDivider: React.FC<ITitleDivider> = ({ classes = "" }) => {
  return (
    <div className={`${style.TitleDividerWrapper} flex justify-center ${classes}`}>
      <div className={`${style.TitleDivider} w-[33.125rem] flex justify-center flex-col`}>
        <div className={`text-4xl font-bold ml-auto mb-2 `}>REDEFINE BRAND</div>
        <img className={`${style.decoration} w-[20.813rem] h-[3.125rem]`} src={decoration} alt="" />
        <div className={`${style.orange}`}>
          <img src={orange} alt="" />
        </div>
        <div className={`text-4xl font-bold`}>EXPERIENCE</div>
      </div>
    </div>
  );
};
