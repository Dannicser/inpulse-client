import React, { useEffect, useState } from "react";
import { MutableRefObject, useRef } from "react";

import style from "./SectionDo.module.css";

interface ISectionDo {
  classes?: string;
}

export const SectionDo: React.FC<ISectionDo> = ({ classes = "" }) => {
  const [isEffect, setIsEffect] = useState(false);

  const timer = useRef(null) as MutableRefObject<any>;

  useEffect(() => {
    window.addEventListener("scroll", useAddEffect);

    return () => {
      window.removeEventListener("scroll", useAddEffect);
    };
  }, []);

  function useAddEffect() {
    if (timer.current) {
      setIsEffect(true);
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      setIsEffect(false);
    }, 1000);
  }

  return (
    <section className={`${classes}`} id={`${style.do}`}>
      <div className={`${style.do_inner}`}>
        <div className={`${style.do_title}`}>
          <span className={`${style.above_title} font-light`}>WHAT</span>
          <h3 className={`${style.title}`}>
            WE <span className={`${style.red}`}>DO</span>?
          </h3>
        </div>
        <span className={`${style.do_hashtag}`}>
          <span>#ourmotto</span>
        </span>
        <div className={`${style.do_info} ${isEffect ? `opacity-60` : `opacity-100`} transition-opacity duration-1000 font-Involve font-medium`}>
          <p className={`${style.description}`}>
            We are a creative agency integrating Tech and <span className={`${style.grey}`}>Digital art.</span>
            <br />
            <br />
            <p className={`${style.grey}`}>We provide targeted marketing solutions for businesses and unite them with cultural forces.</p>
          </p>
        </div>
      </div>
    </section>
  );
};
