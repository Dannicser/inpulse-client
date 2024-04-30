import { useTranslation } from "react-i18next";

import style from "./TextSlider.module.css";

interface ITextSlider {
  classes?: string;
}

export const TextSlider: React.FC<ITextSlider> = ({ classes = "" }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={`${style.TextSlider} ${classes} `}>
      <div className={`${style.ticker_wrap}`}>
        <div className={`${style.ticker}`}>
          <div className={`${style.ticker__item}`}>
            {t("ticker_left")} <span>{t("ticker_span")}</span> {t("ticker_right")}
          </div>
        </div>
      </div>
    </div>
  );
};
