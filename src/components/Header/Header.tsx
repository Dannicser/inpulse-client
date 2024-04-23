import React from "react";

import { Switcher } from "../Switcher/Switcher";

import style from "./Header.module.css";

import logo from "./assets/logo.svg";

interface IMenu {
  name: string;
  link: string;
  isActive: boolean;
  id: number;
}

const menu: IMenu[] = [
  {
    name: "Home",
    link: "#1",
    isActive: true,
    id: 1,
  },
  {
    name: "What are we",
    link: "#2",
    isActive: false,
    id: 2,
  },
  {
    name: "For Whom?",
    link: "#3",
    isActive: false,
    id: 3,
  },
  {
    name: "Contacts",
    link: "#4",
    isActive: false,
    id: 4,
  },
];

interface IHeaderProps {
  classes?: string;
}

export const Header: React.FC<IHeaderProps> = ({ classes = "" }) => {
  return (
    <header className={`flex justify-between items-center ${classes}`}>
      <div className={`w-28`}>
        <img src={logo} alt="" />
      </div>
      <menu className={`container w-2/4`}>
        <div className={`flex justify-between max-md:hidden`}>
          {menu.map((item) => {
            return (
              <>
                <a
                  href={item.link}
                  className={`font-semibold text-${
                    item.isActive ? `primary font-bold underline underline-offset-2 decoration-[1.7px] ${style.isActive}` : `secondary`
                  }`}
                >
                  {item.name}
                </a>
              </>
            );
          })}
        </div>
      </menu>
      <div className={`flex items-center`}>
        <Switcher />
        <div className={`md:hidden ml-10`}>
          <div className={`w-7 h-1 bg-black mb-1`}></div>
          <div className={`w-4 h-1 bg-black ml-auto`}></div>
        </div>
      </div>
    </header>
  );
};
