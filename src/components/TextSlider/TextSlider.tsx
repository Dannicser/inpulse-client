import style from "./TextSlider.module.css";

interface ITextSlider {
  classes?: string;
}

export const TextSlider: React.FC<ITextSlider> = ({ classes = "" }) => {
  return (
    <div className={`${style.TextSlider} ${classes} `}>
      <div className={`${style.ticker_wrap}`}>
        <div className={`${style.ticker}`}>
          <div className={`${style.ticker__item}`}>
            Exploring trends and experimenting with <span>innovative</span> formats, our approach tackles ambitious business challenges, delights
            audiences, and transforms consumer experiences for our clients.
          </div>
        </div>
      </div>
    </div>
  );
};
