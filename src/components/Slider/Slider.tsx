import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import style from "./Slider.module.css";

import photo_one from "./assets/one.png";
import photo_two from "./assets/two.png";
import photo_three from "./assets/three.png";
import star from "./assets/icons/star.svg";

const SCREEN_WIDTH: number = window.innerWidth;

const content: IContent[] = [
  {
    title: "JON DENNISTON",
    img: photo_one,
    date: "13 aug 2024",
    descr: "some information some information ",
    id: 1,
  },
  { title: "DAN JESNE", img: photo_two, date: "12 aug 2024", descr: "some information", id: 2 },
  { title: "RICHE HOK", img: photo_three, date: "11 aug 2024", descr: "some information", id: 3 },
  { title: "JON DENNISTON", img: photo_one, date: "13 aug 2024", descr: "some information some information some", id: 4 },
  { title: "ELON DAL", img: photo_two, date: "12 aug 2024", descr: "some information", id: 5 },
  { title: "ERIC LASODA", img: photo_three, date: "11 aug 2024", descr: "some information", id: 6 },
  { title: "DAN JESNE!", img: photo_two, date: "12 aug 2024", descr: "some information", id: 2 },
  // { title: "RICHE HOK", img: photo_three, date: "11 aug 2024", descr: "some information", id: 3 },
  // { title: "JON DENNISTON", img: photo_one, date: "13 aug 2024", descr: "some information some information some", id: 4 },
  // { title: "ELON DAL!", img: photo_two, date: "12 aug 2024", descr: "some information", id: 5 },
  // { title: "ERIC LASODA!", img: photo_three, date: "11 aug 2024", descr: "some information", id: 6 },
];

interface IContent {
  title: string;
  img: any;
  date: string;
  descr: string;
  id: number;
}

interface ISlider {
  classes?: string;
}

export const Slider: React.FC<ISlider> = ({ classes = "" }) => {
  const [position, setPosition] = useState(0);
  const [index, setIndex] = useState(1);

  const effect = useSpring({
    from: {
      transform: `${0}%`,
      config: {
        duration: 2000,
      },
    },
  });

  useEffect(() => {
    effect.transform.start({
      to: { transform: `translateX(-${position}px)` },
    });

    if (position * content.length === index * position) {
      setPosition(0);
      setIndex(1);
    }
  }, [effect.transform, position]);

  function onMove() {
    setIndex((prev) => prev + 1);

    if (SCREEN_WIDTH >= 1024) {
      return setPosition((prev) => prev + 365);
    }

    if (SCREEN_WIDTH >= 768) {
      return setPosition((prev) => prev + 353);
    } else {
      return setPosition((prev) => prev + 340);
    }
  }

  return (
    <div className={`${style.Slider_wrapper}`}>
      <animated.div style={{ ...effect }} className={`${style.Slider} h-[436px] max-md:h-[24.375rem] max-sm:h-[26.375rem] ${classes}`}>
        {content.map(({ img, title, descr, date, id }) => {
          return <Slide id={id} img={img} title={title} descr={descr} date={date} />;
        })}
      </animated.div>
      <animated.div style={{ ...effect }} className={`${style.Slider} h-[436px] max-md:h-[24.375rem] max-sm:h-[26.375rem] ${classes}`}>
        {content.map(({ img, title, descr, date, id }) => {
          return <Slide id={id} img={img} title={title} descr={descr} date={date} />;
        })}
      </animated.div>
      <div
        onClick={onMove}
        className={`${style.switcher} md:w-[5.688rem] md:h-[5.688rem] sm:w-[4.938rem] sm:h-[4.938rem] sm:w-[4.938rem] xs:w-[4.938rem] xs:h-[4.938rem] us:w-[5.688rem] us:h-[5.688rem] bg-black lg:right-[23%] md:right-[15%] sm:right-[8%] xs:right-[8%] us:right-[8%]`}
      >
        Next
      </div>
    </div>
  );
};

const Slide: React.FC<IContent> = ({ title, img, date, descr, id }) => {
  return (
    <div key={id} className={`${style.Slide} lg:w-[22.875rem] md:w-[22.125rem] sm:w-[21.313rem] us:w-[21.313rem]`}>
      <div className={`${style.slide_container}`}>
        <div className={`text-center`}>
          <div className={`text-lg font-medium mb-3`}>{title}</div>
          <div className={`mb-3 flex justify-center`}>
            <img className={`block`} src={img} alt="" />
          </div>
          <p className={`text-[#999999] text-wrap leading-5`}>{date}</p>
          <p className={`${style.slide_descr} text-[#999999] text-wrap leading-5`}>{descr}</p>
        </div>
      </div>
      <div className={style.star}>
        <img src={star} alt="" />
      </div>
    </div>
  );
};
