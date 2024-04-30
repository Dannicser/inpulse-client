import React from "react";

import style from "./SectionBenefits.module.css";

import oneImg from "./assets/one.png";
import twoImg from "./assets/two.png";
import threeImg from "./assets/three.png";
import fourImg from "./assets/four.png";
import fiveImg from "./assets/five.png";
import arrow from "./assets/arrow.svg";

export const SectionBenefits: React.FC = () => {
  return (
    <section id="forwhom" className={style.benefits}>
      <div className={style.benefits_title}>
        <span className={style.above_title}>WHAT ARE</span>
        <h3 className={style.title}>
          <span className={style.red}>BENEFITS</span> <br /> FOR ME?
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
        <Card src={oneImg} number={1} caption="Surprise your customers and create an emotional connection with each of them." />
        <Card src={twoImg} number={2} caption="Attract new audiences." />
        <Card src={threeImg} number={3} caption="Communicate your brand values in a way that grabs attention." />
        <Card src={fourImg} number={4} caption="Explore new digital capabilities." />
        <Card src={fiveImg} number={5} caption="Be part of a one-of-a-kind artistic statement." />
      </div>

        <button className={style.button}>
            <span className={style.button_text}>GET IN TOUCH</span>

            <svg className={style.button_img} width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path
                    d="M23.9736 16L23.9736 15.5L22.9736 15.5L22.9736 16L23.9736 16ZM22.9736 30.0964C22.9736 30.3726 23.1975 30.5964 23.4736 30.5964C23.7498 30.5964 23.9736 30.3726 23.9736 30.0964L22.9736 30.0964ZM28.7202 25.3498L29.2202 25.3498L29.2202 24.3498L28.7202 24.3498L28.7202 25.3498ZM23.0874 29.8043C22.9552 30.0467 23.0445 30.3504 23.2869 30.4827C23.5294 30.6149 23.8331 30.5255 23.9653 30.2831L23.0874 29.8043ZM18.2797 24.3498L17.7797 24.3498L17.7797 25.3498L18.2797 25.3498L18.2797 24.3498ZM22.9736 16L22.9736 30.0437L23.9736 30.0437L23.9736 16L22.9736 16ZM22.9736 30.0437L22.9736 30.0964L23.9736 30.0964L23.9736 30.0437L22.9736 30.0437ZM28.7202 24.3498C27.9563 24.3498 27.224 24.7627 26.5968 25.2738C25.9574 25.7948 25.3552 26.4772 24.8423 27.141C24.327 27.8078 23.8894 28.4721 23.5812 28.9683C23.4267 29.2169 23.3041 29.4244 23.2198 29.5703C23.1776 29.6434 23.1449 29.7011 23.1226 29.7409C23.1114 29.7608 23.1028 29.7762 23.0969 29.7869C23.094 29.7923 23.0917 29.7964 23.0901 29.7993C23.0893 29.8008 23.0887 29.8019 23.0882 29.8027C23.088 29.8031 23.0878 29.8035 23.0877 29.8037C23.0876 29.8039 23.0875 29.804 23.0875 29.8041C23.0874 29.8042 23.0874 29.8043 23.5263 30.0437C23.9653 30.2831 23.9653 30.2832 23.9652 30.2832C23.9653 30.2832 23.9652 30.2832 23.9653 30.2832C23.9653 30.2831 23.9654 30.283 23.9655 30.2828C23.9657 30.2824 23.9661 30.2816 23.9667 30.2806C23.9678 30.2785 23.9697 30.2752 23.9721 30.2707C23.9771 30.2617 23.9847 30.248 23.9949 30.2299C24.0152 30.1936 24.0457 30.1397 24.0856 30.0707C24.1654 29.9326 24.2825 29.7344 24.4306 29.496C24.7273 29.0183 25.1455 28.3842 25.6336 27.7525C26.1239 27.1179 26.6727 26.5018 27.2285 26.049C27.7965 25.5862 28.3037 25.3498 28.7202 25.3498L28.7202 24.3498ZM23.4736 30.0437C23.9372 29.8563 23.9371 29.8562 23.9371 29.8561C23.9371 29.856 23.937 29.8558 23.9369 29.8556C23.9368 29.8553 23.9366 29.8549 23.9364 29.8545C23.9361 29.8535 23.9355 29.8523 23.9349 29.8507C23.9336 29.8476 23.9318 29.8432 23.9295 29.8376C23.9249 29.8265 23.9183 29.8106 23.9096 29.7902C23.8923 29.7494 23.867 29.6907 23.8339 29.6166C23.7678 29.4685 23.6704 29.2585 23.5439 29.0073C23.2916 28.5061 22.9204 27.8344 22.4466 27.1594C21.9746 26.4871 21.3887 25.7941 20.7022 25.2653C20.0151 24.7358 19.1988 24.3498 18.2797 24.3498L18.2797 25.3498C18.9083 25.3498 19.5151 25.613 20.0919 26.0574C20.6695 26.5024 21.1886 27.1079 21.6282 27.734C22.0659 28.3576 22.4128 28.9843 22.6507 29.4569C22.7694 29.6926 22.8601 29.8885 22.9209 30.0244C22.9512 30.0923 22.974 30.1452 22.9889 30.1805C22.9964 30.1981 23.0019 30.2114 23.0055 30.2199C23.0072 30.2241 23.0085 30.2272 23.0093 30.2291C23.0096 30.23 23.0099 30.2306 23.01 30.231C23.0101 30.2311 23.0101 30.2312 23.0101 30.2312C23.0101 30.2312 23.0101 30.2311 23.0101 30.2311C23.0101 30.2311 23.01 30.231 23.4736 30.0437Z"
                    fill="black"/>
            </svg>

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
            <div style={{left: number === 1 ? 13 : "auto"}} className={style.number_border}>
                <div className={style.number_circle}>
                    <span className={style.number}>{number}</span>
                </div>
            </div>

            <div className={style.card_img_wrapper}>
                <img className={style.card_img} src={src} alt={number + " photo"}/>
            </div>
            <div className={style.card_caption}>{caption}</div>
        </div>
    );
};
