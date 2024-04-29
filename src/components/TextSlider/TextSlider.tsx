import style from "./TextSlider.module.css";

interface ITextSlider {
  classes?: string;
}

export const TextSlider: React.FC<ITextSlider> = ({ classes = "" }) => {
  return (
    <div className={`${style.TextSlider} ${classes}`}>
      <div className={`${style.block}`}>
        English is a West Germanic language in the Indo-European language family, whose speakers, called Anglophones, originated in early medieval
        England.
      </div>
    </div>
  );
};
