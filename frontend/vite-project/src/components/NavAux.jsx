import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import {GiWorld} from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import {useTranslation} from "react-i18next";
import LanguagesFlyOut from "./LanguageFlyOut.jsx";
import FlyOutLink from "./FlyOutLink.jsx"; // <-- NOVO IMPORT
import {FiMenu} from "react-icons/fi";
import i18n from "i18next";

const NavAux = () => {
    /* Used for scrolleble iteraction */
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

    /* Used for the responsive style -> mobile */
    const [isVisible, setIsVisible] = useState(false)

    /* Used for language changing on the website */
    // Linguagem inicial em minúsculas
    const [currentLanguage, setCurrentLanguage] = useState(
        i18n.resolvedLanguage || i18n.language
    );
    const {t} = useTranslation();

    // Função para mostrar abreviatura maiúscula na UI
    const displayLang = currentLanguage.toUpperCase();
    console.log(displayLang);

    return (
        <nav className={`bg-white flex justify-between items-center w-full mx-auto py-5 px-10 md:fixed md:top-0 md:left-0 md:z-50 ${scrolled ? "shadow-md border-b-0" : "border-black border-b-2"}`}>
            <div>
                <NavLink to="/">
                    <img src="/logo.png" className="h-15 md:pl-5"/>
                </NavLink>
            </div>

            <div className={`${isVisible ?  "block" : "hidden"} md:block transition-transform duration-200 ease-out shadow-md md:static absolute bg-white md:min-h-fit min-h-[30vh] left-0 top-[15%] md:w-auto w-full flex items-center mb:pb-5 mb:px-10`}>
                <ul className="flex md:flex-row flex-col justify-center items-center w-full md:gap-[4vw] text-xl gap-8">
                    <li>
                        <NavLink className="hover:text-gray-500" to="/">{t("home")}</NavLink>
                    </li>

                    <li>
                        <NavLink className="hover:text-gray-500" to="/sobrenos">{t("about")}</NavLink>
                    </li>

                    <li>
                        <NavLink className="hover:text-gray-500" to="/servicos">{t("services")}</NavLink>
                    </li>

                    <li>
                        <NavLink className="hover:text-gray-500" to="/portfolio">{t("portfolio")}</NavLink>
                    </li>

                    <li>
                        <NavLink className="hover:text-gray-500" to="/contactos">{t("contacts")}</NavLink>
                    </li>

                    <li>

                        <FlyOutLink
                            currentLanguage={currentLanguage}          // <-- NOVO
                            setCurrentLanguage={setCurrentLanguage}    // <-- NOVO
                            FlyOutContent={LanguagesFlyOut}
                        >
                            {displayLang}
                            <GiWorld/>
                        </FlyOutLink>
                    </li>
                </ul>
            </div>

            <div className="flex items-center gap-6 md:hidden">
                <IoMenu onClick={() => setIsVisible(!isVisible)} className="text-3xl cursor-pointer"/>
            </div>
        </nav>
    )
}
export default NavAux
