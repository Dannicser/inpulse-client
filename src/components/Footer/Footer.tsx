import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import { Layout } from "../Layout/Layout";

import vector from "./assets/vector.png";
import heart from "./assets/heart.png";
import pulse from "./assets/pulse.png";
import logo from "../Header/assets/logo.svg";

import instagram from "./assets/instagram.svg";
import linkedIn from "./assets/linkedln.svg";
import telegram from "./assets/telegram.svg";
import twitter from "./assets/twitter.svg";

import s from "./Footer.module.css";

import background from "./assets/background.png";

export const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [text, setText] = useState<string>("");

  async function sendText(e: React.MouseEvent<HTMLElement>) {
    try {
      e.preventDefault();

      await axios.post(
        "https://api.mailopost.ru/v1/email/messages",
        {
          from_email: "qwrerty2016@gmail.com",
          to: "qwrerty2016@gmail.com",
          subject: "In Pulse",
          text,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setText("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <footer id={"contacts"} className={`${s.footer} mb-3`}>
      <div className={s.footer_top} style={{ backgroundImage: `url(${vector})` }}>
        <Layout classes={`xl:mx-[7.5rem] lg:mx-[5.5rem] md:mx-[3.5rem] sm:mx-[1rem] xs:mx-[1rem] us:mx-[1.875rem] mt-20`}>
          <div className={s.footer_top_grid}>
            <div className={s.heart}>
              <span className={s.heart_text}>STAY</span>
              <img className={s.heart_heart} src={heart} alt="heart" />
              <img className={s.heart_pulse} src={pulse} alt="pulse" />
            </div>

            <div className={s.social}>
              {/* <img className={s.social_logo} src={logo} alt="logo" /> */}
              <div className={s.social_text}>
                {t("story_up")}
                <br /> {t("story_bottom")}
              </div>
              <div className={s.social_media}>
                <a target="_blank" href="https://instagram.com/inpulsenow">
                  <img src={instagram} alt="inst" />
                </a>
                <a target="_blank" href="https://linkedin.com/company/inpulsenow">
                  <img src={linkedIn} alt="linkedIn" />
                </a>
                <a target="_blank" href="https://t.me/inpulsenow">
                  <img src={telegram} alt="telegram" />
                </a>
                <a target="_blank" href="">
                  <img src={twitter} alt="twitter" />
                </a>
              </div>
            </div>

            <div className={s.email}>
              <img className={s.email_img} src={background} alt="magic" />
              <div className={s.email_content}>
                {t("newyork")} & {t("moscow")} <br />
                <a href="#">magic@inpulse.events</a>
              </div>
            </div>

            <form className={s.form}>
              <input className={s.input} type="text" placeholder={t("share_story")} value={text} onChange={(e) => setText(e.target.value)} />
              <button
                disabled={text.length ? false : true}
                onClick={sendText}
                className={`${s.form_button} transition-opacity duration-500 hover:opacity-70`}
              >
                {t("send")}
              </button>
            </form>
          </div>

          <div className={s.footer_bottom_grid}>
            <img className={s.footer_bottom_logo} src={logo} alt="logo" />
            <nav className={s.nav}>
              <a className={`${s.nav_item} transition-opacity duration-500 hover:opacity-70`} href="#home">
                {t("home")}
              </a>
              <a className={`${s.nav_item} transition-opacity duration-500 hover:opacity-70`} href="#we">
                {t("whatarewe")}
              </a>
              <a className={`${s.nav_item} transition-opacity duration-500 hover:opacity-70`} href="#forwhom">
                {t("forwhom")}
              </a>
              <a className={`${s.nav_item} transition-opacity duration-500 hover:opacity-70`} href="#contacts">
                {t("contacts")}
              </a>
            </nav>
            <div className={s.copyright}>All rights reserved © 2024 In Pulse</div>
          </div>
        </Layout>
      </div>
    </footer>
  );
};
