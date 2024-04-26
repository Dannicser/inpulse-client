import React from "react";

import style from "./Slider.module.css";

import photo_one from "./assets/one.png";
import photo_two from "./assets/two.png";
import photo_three from "./assets/three.png";
import star from "./assets/icons/star.svg";
import { useSpring } from "@react-spring/web";

const content: IContent[] = [
  {
    title: "JON DENNISTON",
    img: photo_one,
    date: "13 aug 2024",
    descr: "some information some information ",
  },
  { title: "DAN JESNE", img: photo_two, date: "12 aug 2024", descr: "some information" },
  { title: "RICHE HOK", img: photo_three, date: "11 aug 2024", descr: "some information" },
  { title: "JON DENNISTON", img: photo_one, date: "13 aug 2024", descr: "some information some information some" },
  { title: "ELON DAL", img: photo_two, date: "12 aug 2024", descr: "some information" },
  { title: "ERIC LASODA", img: photo_three, date: "11 aug 2024", descr: "some information" },
];

interface IContent {
  title: string;
  img: any;
  date: string;
  descr: string;
}

interface ISlider {
  classes?: string;
}

export const Slider: React.FC<ISlider> = ({ classes = "" }) => {
  const effect = useSpring({
    loop: true,
    from: {
      background: `linear-gradient(to right, #f00, #ffa500, #ff0, #008000, #00f, #4b0082, #ee82ee)`,
    },
  });
  return (
    <div className={`${style.Slider} h-[436px]  ${classes}`}>
      {content.map(({ img, title, descr, date }) => {
        return <Slide img={img} title={title} descr={descr} date={date} />;
      })}
      <div className={`${style.switcher} w-[5.688rem] h-[5.688rem] bg-black`}>Drag</div>
    </div>
  );
};

const Slide: React.FC<IContent> = ({ title, img, date, descr }) => {
  return (
    <div className={`${style.Slide} lg:w-[22.125rem]`}>
      <div className={`${style.slide_container}`}>
        <div className={`text-center`}>
          <div className={`text-lg font-medium mb-3`}>{title}</div>
          <div className={`mb-3 flex justify-center`}>
            <img className={`block`} src={img} alt="" />
          </div>
          <p className={`text-[#999999]`}>{date}</p>
          <p className={`${style.slide_descr} text-wrap text-stable leading-5 text-[#999999]`}>{descr}</p>
        </div>
      </div>
      <div className={style.star}>
        <img src={star} alt="" />
      </div>
    </div>
  );
};
