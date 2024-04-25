import style from "./Divider.module.css";

interface IDivider {
  classes?: string;
}

export const Divider: React.FC<IDivider> = ({ classes = "" }) => {
  return (
    <div className={`max-lg:hidden`}>
      <div className={`${style.Divider} ${classes}`}></div>
      <div className={`${style.divider_text}`}>Gallery Partners</div>
    </div>
  );
};
