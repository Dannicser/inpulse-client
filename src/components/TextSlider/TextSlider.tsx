import { useTranslation } from "react-i18next";

import style from "./TextSlider.module.css";

interface ITextSlider {
  classes?: string;
}

export const TextSlider: React.FC<ITextSlider> = ({ classes = "" }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={`${style.TextSlider} ${classes} `}>
      <div className={style.ticker_wrap}>
        <div className={style.ticker}>
          <span className={style.item_collection}>
            <span className={style.item}>
              {t("ticker_left")} <span className={style.ticker_highlight}>{t("ticker_span")}</span> {t("ticker_right")}
            </span>
          </span>
          <span>
            <span className={style.item}>
              {t("ticker_left")} <span className={style.ticker_highlight}>{t("ticker_span")}</span> {t("ticker_right")}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
