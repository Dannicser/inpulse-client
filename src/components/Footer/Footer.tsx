import React, { useState } from "react";
import { Layout } from "../Layout/Layout";

import vector from "./assets/vector.png";
import heart from "./assets/heart.png";
import pulse from "./assets/pulse.png";
import logo from "../Header/assets/logo.svg";

import instagram from "./assets/instagram.svg";
import linkedIn from "./assets/linkedln.svg";
import telegram from "./assets/telegram.svg";
import twitter from "./assets/twitter.svg";
import magic from "./assets/magic.png";

import s from "./Footer.module.css";

export const Footer: React.FC = () => {
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
              <img className={s.social_logo} src={logo} alt="logo" />
              <div className={s.social_text}>
                Shall we tell an <br /> exciting story together?
              </div>
              <div className={s.social_media}>
                <a href="#">
                  <img src={instagram} alt="inst" />
                </a>
                <a href="#">
                  <img src={linkedIn} alt="linkedIn" />
                </a>
                <a href="#">
                  <img src={telegram} alt="telegram" />
                </a>
                <a href="#">
                  <img src={twitter} alt="twitter" />
                </a>
              </div>
            </div>

            <div className={s.email}>
              <img className={s.email_img} src={magic} alt="magic" />
              <div className={s.email_content}>
                New York & Moscow <br />
                <a href="#">magic@inpulse.events</a>
              </div>
            </div>

            <form className={s.form}>
              <Input />
              <button className={s.form_button}>Send</button>
            </form>
          </div>

          <div className={s.footer_bottom_grid}>
            <img className={s.footer_bottom_logo} src={logo} alt="logo" />
            <nav className={s.nav}>
              <a className={s.nav_item} href="#">
                Home
              </a>
              <a className={s.nav_item} href="#">
                What are we
              </a>
              <a className={s.nav_item} href="#">
                For Who?
              </a>
              <a className={s.nav_item} href="#">
                Contacts
              </a>
            </nav>
            <div className={s.copyright}>All rights reserved © 2024 IN PULSE</div>
          </div>
        </Layout>
      </div>
    </footer>
  );
};

const Input: React.FC = () => {
  const [input, setInput] = useState("");

  return <input className={s.input} type="text" placeholder="Share your story" value={input} onChange={(e) => setInput(e.target.value)} />;
};
