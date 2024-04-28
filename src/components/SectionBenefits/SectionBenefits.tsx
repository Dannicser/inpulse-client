import React from 'react';

import style from './SectionBenefits.module.css';

import oneImg from './assets/one.png';
import twoImg from './assets/two.png';
import threeImg from './assets/three.png';
import fourImg from './assets/four.png';
import fiveImg from './assets/five.png';
import arrow from './assets/arrow.svg';

export const SectionBenefits: React.FC = () => {
  return (
    <section className={style.benefits}>
      <div className={style.benefits_title}>
        <span className={style.above_title}>WHAT ARE</span>
        <h3 className={style.title}>
          <span className={style.red}>BENEFITS</span> <br/> FOR ME?
        </h3>
      </div>

      <div className={style.hashtags}>
        <div className={style.hashtags_line}>
          <span className={style.hashtags_item}>#portarit</span>
          <span className={style.hashtags_item}>#digitalart</span>
          <span className={style.hashtags_item}>#inpulse</span>
        </div>
        <div className={style.hashtags_line}>
          <span className={style.hashtags_item}>#info</span>
          <span className={style.hashtags_item}>#some image</span>
        </div>
      </div>

      <div className={style.pictures}>
        <Card src={oneImg} number={1}
              caption="Surprise your customers and create an emotional connection with each of them."/>
        <Card src={twoImg} number={2} caption="Attract new audiences."/>
        <Card src={threeImg} number={3} caption="Communicate your brand values in a way that grabs attention."/>
        <Card src={fourImg} number={4} caption="Explore new digital capabilities."/>
        <Card src={fiveImg} number={5} caption="Be part of a one-of-a-kind artistic statement."/>
      </div>

      <button className={style.button}>
        <span className={style.button_text}>GET IN TOUCH</span>
        <img className={style.button_img} src={arrow} alt="arrow"/>
      </button>
    </section>
  );
};


interface CardProps {
  src: string;
  caption: string;
  number: number;
}

const Card: React.FC<CardProps> = ({src, caption, number}) => {
  return (
    <div className={style.card}>
      <div
        style={{ left: number === 1 ? 13 : 'auto' }}
        className={style.number_border}
      >
        <div className={style.number_circle}>
          <span className={style.number}>{number}</span>
        </div>
      </div>

      <div className={style.card_img_wrapper}>
        <img className={style.card_img} src={src} alt={number + ' photo'}/>
      </div>
      <div className={style.card_caption}>{caption}</div>
    </div>
  )
}