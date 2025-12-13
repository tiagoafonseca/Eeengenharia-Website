import React, {useState, useEffect} from "react";
import {Link, NavLink} from "react-router-dom";
import {GiWorld} from "react-icons/gi";
import LanguagesFlyOut from "./LanguageFlyOut.jsx";
import {useTranslation} from "react-i18next";
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Linguagem inicial em minúsculas
    const [currentLanguage, setCurrentLanguage] = useState("pt");
    const {t} = useTranslation();

    const FlyOutLink = ({children, FlyOutContent}) => {
        const [open, setOpen] = useState(false);
        const showFlyout = open && FlyOutContent;

        return (
            <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className="group relative h-fit w-fit"
            >
                <button
                    type="button"
                    className="flex flex-row items-center text-black gap-x-2 hover:text-gray-500 transition-all duration-200 ease-in-out"
                >
                    {children}
                </button>
                {showFlyout && (
                    <div className="absolute left-1/2 top-full -translate-x-1/2 bg-white text-black">
                        <FlyOutContent
                            currentLanguage={currentLanguage}
                            setCurrentLanguage={setCurrentLanguage}
                        />
                    </div>
                )}
            </div>
        );
    };

    // Função para mostrar abreviatura maiúscula na UI
    const displayLang = currentLanguage.toUpperCase();

    return (
        <nav
            className={`flex-col bg-black text-white h-25 flex md:flex-row items-center w-full px-4 py-5 fixed top-0 left-0 z-50 md:text-white md:bg-white ${scrolled ? "shadow-md border-b-0" : "border-black border-b-2"}`}>
            <NavLink to="/" className={({isActive}) => ``}>
                <img className="max-w-[180px]" src="/logo.png" alt="logo"/>
            </NavLink>

            <div className="flex lg:flex-row flex-col top-[-100%] lg:top-[inherit] lg:ml-auto gap-8 text-[22px]">
                <NavLink
                    to="/"
                    className={({isActive}) =>
                        `py-4 px-6 text-primaryDark relative group transition-all duration-300 ease-in-out 
                        ${isActive ? "text-gray-500" : ""}`
                    }
                >
                    {({isActive}) => (
                        <p className="relative">
                            {t("home")}
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] bg-primaryDark transition-all duration-300 
                           ${isActive ? "w-full" : "w-0"}`}
                            ></span>
                        </p>
                    )}
                </NavLink>

                <NavLink
                    to="/sobrenos"
                    className={({isActive}) =>
                        `py-4 px-6 text-primaryDark relative group transition-all duration-300 ease-in-out 
                        ${isActive ? "text-gray-500" : ""}`
                    }
                >
                    {({isActive}) => (
                        <p className="relative">
                            {t("about")}
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] bg-primaryDark transition-all duration-300 
                                ${isActive ? "w-full" : "w-0"}`}
                            ></span>
                        </p>
                    )}
                </NavLink>

                <NavLink
                    to="/servicos"
                    className={({isActive}) =>
                        `py-4 px-6 text-primaryDark relative group transition-all duration-300 ease-in-out 
                        ${isActive ? "text-gray-500" : ""}`
                    }
                >
                    {({isActive}) => (
                        <p className="relative">
                            {t("services")}
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] bg-primaryDark transition-all duration-300 
                                ${isActive ? "w-full" : "w-0"}`}
                            ></span>
                        </p>
                    )}
                </NavLink>

                <NavLink
                    to="/portfolio"
                    className={({isActive}) =>
                        `py-4 px-6 text-primaryDark relative group transition-all duration-300 ease-in-out 
                        ${isActive ? "text-gray-500" : ""}`
                    }
                >
                    {({isActive}) => (
                        <p className="relative">
                            {t("portfolio")}
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] bg-primaryDark transition-all duration-300 
                                ${isActive ? "w-full" : "w-0"}`}
                            ></span>
                        </p>
                    )}
                </NavLink>

                <NavLink
                    to="/contactos"
                    className={({isActive}) =>
                        `py-4 px-6 text-primaryDark relative group transition-all duration-300 ease-in-out 
                        ${isActive ? "text-gray-500" : ""}`
                    }
                >
                    {({isActive}) => (
                        <p className="relative">
                            {t("contacts")}
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] bg-primaryDark transition-all duration-300 
                                ${isActive ? "w-full" : "w-0"}`}
                            ></span>
                        </p>
                    )}
                </NavLink>

                <div className="py-4 px-6">
                    <FlyOutLink FlyOutContent={LanguagesFlyOut}>
                        {displayLang}
                        <GiWorld/>
                    </FlyOutLink>
                </div>
                <div className="text-2xl md:hidden flex justify-end grow">
                    <FiMenu className="cursor-pointer"></FiMenu>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
