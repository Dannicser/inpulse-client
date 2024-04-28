import React, {useEffect, useState} from "react";

import {Switcher} from "../Switcher/Switcher";

import style from "./Header.module.css";

import logo from "./assets/logo.svg";
import {HeaderBurger} from "../Header-burger/HeaderBurger";

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
        name: "For Who?",
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

export const Header: React.FC<IHeaderProps> = ({classes = ""}) => {
    const [burgerActive, setBurgerActive] = useState<boolean>(false)



    return (
    <>

        <header className={`${style.Header} flex justify-between items-center h-9 ${classes}`}>
            <img
                className={`xl:w-[5.938rem] lg:w-[5.938rem]md:w-[4.375rem] sm:w-[4.375rem] xs:w-[4.375rem] us:w-[4.375rem] us:h-12}`}
                src={logo} alt=""/>

            <menu className={`container xl:w-[25.5rem] lg:w-[23.5rem] md:w-[20.5rem]`}>
                <div className={`flex justify-between max-md:hidden`}>
                    {menu.map((item) => {
                        return (
                            <>
                                <a
                                    href={item.link}
                                    className={`font-semibold text-base ${
                                        item.isActive ? `text-primary font-bold underline underline-offset-2 decoration-[1.7px] ${style.isActive}` : `text-secondary`
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
                <Switcher/>
                <div className={`md:hidden max-md:ml-10 z-10`} onClick={() => setBurgerActive(!burgerActive)}>
                    <div className={`w-7 h-1 max-md:bg-black mb-1`}></div>
                    <div className={`w-5 h-1 max-md:bg-black ml-auto`}></div>
                </div>
            </div>
        </header>
        <HeaderBurger active={burgerActive} setActive={setBurgerActive}/>
    </>

    );
};
