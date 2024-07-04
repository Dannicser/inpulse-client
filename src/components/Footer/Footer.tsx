import React from "react";

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
import tiktok from "./assets/tiktok.svg";

import s from "./Footer.module.css";

import background from "./assets/background.png";

interface IFooterProps {
  classes?: string;
}

export const Footer: React.FC<IFooterProps> = ({ classes = "" }) => {
  const { t, i18n } = useTranslation();

  const eng_mail_text =
    "Hi,%0D%0A%0D%0AMy name is%0D%0AI'm reaching out because I believe we could do some truly amazing things together.%0D%0A%0D%0ALet's see how you can get my brand's pulse racing!%0D%0A%0D%0AMy contacts for getting in touch:%0D%0A%0D%0A---%0D%0ATell us about your project now and we will contact you shortly to discuss the details. We're looking forward to hearing your ideas!";

  const ru_mail_text =
    "Добрый день,%0D%0A%0D%0AМеня зовут%0D%0AЯ пишу вам, чтобы вы помогли ускорить пульс моего бренда в унисон с современными трендами!%0D%0A%0D%0AМои контакты для связи:%0D%0A%0D%0A---%0D%0AРасскажите нам о своем проекте, и мы свяжемся с вами в ближайшее время, чтобы обсудить детали. С нетерпением ждем ваших идей!";

  return (
    <footer id={"contacts"} className={`${s.footer} ${classes} mb-3`}>
      <div className={s.footer_top} style={{ backgroundImage: `url(${vector})` }}>
        <Layout classes={`xl:mx-[7.5rem] lg:mx-[5.5rem] md:mx-[3.5rem] sm:mx-[1rem] xs:mx-[1rem] us:mx-[1.875rem] mt-20`}>
          <div className={s.footer_top_grid}>
            <div className={s.heart}>
              <span className={s.heart_text}>STAY</span>
              <img className={s.heart_heart} src={heart} alt="heart" />
              <img className={s.heart_pulse} src={pulse} alt="pulse" />
            </div>

            <div className={s.social}>
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
                {i18n.language === "ru" ? (
                  <a target="_blank" href="https://t.me/inpulsenow">
                    <img src={telegram} alt="telegram" />
                  </a>
                ) : null}
                <a target="_blank" href="https://x.com/inpulsenow">
                  <img src={twitter} alt="twitter" />
                </a>
                <a target="_blank" href="https://tiktok.com/@inpulsenow">
                  <img src={tiktok} alt="tiktok" />
                </a>
              </div>
            </div>

            <div className={s.email}>
              <img className={s.email_img} src={background} alt="magic" />
              <div className={s.email_content}>
                {t("newyork")} & {t("moscow")} <br />
                <a href="mailto:magic@inpulse.events">magic@inpulse.events</a>
              </div>
            </div>

            <form className={s.form}>
              <a
                href={`mailto:magic@inpulse.events?subject=In Pulse Brand Inquiry&body=${i18n.language === "ru" ? ru_mail_text : eng_mail_text}`}
                className={`${s.form_button} transition-opacity duration-500 hover:opacity-70`}
              >
                {t("send")}
              </a>
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
