import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import { Switcher } from "../Switcher/Switcher";

import { HeaderBurger } from "../Header-burger/HeaderBurger";

import logo from "./assets/logo.svg";
import cross from "./assets/cross.svg";

import style from "./Header.module.css";

interface IMenu {
  name: string;
  link: string;
  isActive: boolean;
  id: number;
}

interface IHeaderProps {
  classes?: string;
}

export const Header: React.FC<IHeaderProps> = ({ classes = "" }) => {
  const { t, i18n } = useTranslation();

  const [burgerActive, setBurgerActive] = useState<boolean>(false);

  const [links, setLinks] = useState<IMenu[]>([
    {
      name: "home",
      link: "#home",
      isActive: true,
      id: 1,
    },
    {
      name: "whatarewe",
      link: "#we",
      isActive: false,
      id: 2,
    },
    {
      name: "forwhom",
      link: "#forwhom",
      isActive: false,
      id: 3,
    },
    {
      name: "contacts",
      link: "#contacts",
      isActive: false,
      id: 4,
    },
  ]);

  if (burgerActive) {
    document.body.classList.add("hide");
  } else {
    document.body.classList.remove("hide");
  }

  function changeActiveLink(id: number) {
    const changed = links.map((link) => {
      if (link.id === id) {
        return { ...link, isActive: true };
      }

      if (link.isActive) {
        return { ...link, isActive: false };
      }

      return link;
    });

    setLinks(changed);
  }
  return (
    <>
      <header className={`${style.Header} flex justify-between items-center h-9 ${classes}`}>
        <img
          className={`xl:w-[5.938rem] lg:w-[5.938rem]md:w-[4.375rem] sm:w-[4.375rem] xs:w-[4.375rem] us:w-[4.375rem] us:h-12}`}
          src={logo}
          alt=""
        />

        <nav className={`container xl:w-[25.5rem] lg:w-[23.5rem] md:w-[21rem]`}>
          <li className={`flex justify-between max-md:hidden`}>
            {links.map((item) => {
              return (
                <>
                  <a
                    href={item.link}
                    onClick={() => changeActiveLink(item.id)}
                    className={`font-semibold transition-opacity duration-500 hover:opacity-70 text-base ${style.base_font} ${
                      item.isActive ? `text-primary font-bold underline underline-offset-2 decoration-[1.7px] ${style.isActive}` : `text-secondary`
                    }`}
                  >
                    {t(item.name)}
                  </a>
                </>
              );
            })}
          </li>
        </nav>
        <div className={`flex items-center`}>
          <Switcher />

          <div className={`md:hidden max-md:ml-10 z-10`} onClick={() => setBurgerActive(!burgerActive)}>
            {!burgerActive ? (
              <>
                <div className={`w-7 h-1 max-md:bg-black mb-1`}></div>
                <div className={`w-5 h-1 max-md:bg-black ml-auto`}></div>
              </>
            ) : (
              <div className={`w-7 h-5`}>
                <img className={`${style.cross}`} src={cross} alt="" />
              </div>
            )}{" "}
          </div>
        </div>
      </header>
      <HeaderBurger active={burgerActive} setActive={setBurgerActive} />
    </>
  );
};
