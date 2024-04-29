import React, { useEffect, useState } from "react";

import { Switcher } from "../Switcher/Switcher";

import style from "./Header.module.css";

import logo from "./assets/logo.svg";
import { HeaderBurger } from "../Header-burger/HeaderBurger";

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
  const [burgerActive, setBurgerActive] = useState<boolean>(false);

  const [links, setLinks] = useState<IMenu[]>([
    {
      name: "Home",
      link: "#home",
      isActive: true,
      id: 1,
    },
    {
      name: "What are we",
      link: "#we",
      isActive: false,
      id: 2,
    },
    {
      name: "For Who?",
      link: "#forwhom",
      isActive: false,
      id: 3,
    },
    {
      name: "Contacts",
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

        <nav className={`container xl:w-[25.5rem] lg:w-[23.5rem] md:w-[20.5rem]`}>
          <li className={`flex justify-between max-md:hidden`}>
            {links.map((item) => {
              return (
                <>
                  <a
                    href={item.link}
                    onClick={() => changeActiveLink(item.id)}
                    className={`font-semibold text-base ${style.base_font} ${
                      item.isActive ? `text-primary font-bold underline underline-offset-2 decoration-[1.7px] ${style.isActive}` : `text-secondary`
                    }`}
                  >
                    {item.name}
                  </a>
                </>
              );
            })}
          </li>
        </nav>
        <div className={`flex items-center`}>
          <Switcher />
          <div className={`md:hidden max-md:ml-10 z-10`} onClick={() => setBurgerActive(!burgerActive)}>
            <div className={`w-7 h-1 max-md:bg-black mb-1`}></div>
            <div className={`w-5 h-1 max-md:bg-black ml-auto`}></div>
          </div>
        </div>
      </header>
      <HeaderBurger active={burgerActive} setActive={setBurgerActive} />
    </>
  );
};
