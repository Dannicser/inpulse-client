import { useState } from "react";

import slide_one from "./assets/imgs/slide_one.jpg";
import slide_two from "./assets/imgs/slide_two.png";
import slide_three from "./assets/imgs/slide_three.jpeg";
import slide_four from "./assets/imgs/slide_four.jpeg";

import left_arrow from "./assets/icons/left_arrow.svg";
import right_arrow from "./assets/icons/right_arrow.svg";

import style from "./Slider.module.css";

const slides = [slide_one, slide_four, slide_three];

export const Slider: React.FC = () => {
  const [number, setNumber] = useState<number>(0);

  function nextSlide() {
    if (number === slides.length - 1) {
      setNumber(0);

      return;
    }

    setNumber((prev) => prev + 1);
  }

  function prevSlide() {
    if (number - 1 === -1) {
      setNumber(slides.length - 1);

      return;
    }

    setNumber((prev) => prev - 1);
  }

  function changeSlide(position: number) {
    setNumber(position);
  }

  return (
    <div className={style.Slider}>
      <div className={style.arrows}>
        <div onClick={prevSlide} className={style.arrow_left}>
          <img src={left_arrow} alt="" />
        </div>
        <div onClick={nextSlide} className={style.arrow_right}>
          <img src={right_arrow} alt="" />
        </div>
      </div>
      <div className={style.sliders}>
        <img src={slides[number]} alt="" />
        <div className={style.points}>
          {slides.map((_, i) => {
            return <div onClick={() => changeSlide(i)} className={`${style.point} ${i === number ? style.active_point : ""}`}></div>;
          })}
        </div>
      </div>
    </div>
  );
};
