import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiWorld } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import LanguagesFlyOut from "../ui/LanguageFlyOut.jsx";
import FlyOutLink from "../ui/FlyOutLink.jsx";
import { NAV_ITEMS } from "../../data/navItems.js";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState(
        i18n.resolvedLanguage || i18n.language || "pt"
    );
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const displayLang = currentLanguage.toUpperCase();
    const closeMobileMenu = () => setIsVisible(false);

    return (
        <nav
            className={`bg-white flex justify-between items-center w-full mx-auto py-5 px-10 md:fixed md:top-0 md:left-0 md:z-50 ${
                scrolled ? "shadow-md border-b-0" : "border-black border-b-2"
            }`}
        >
            <div>
                <NavLink to="/">
                    <img src="/logo.webp" alt="Eeengenharia" className="h-15 md:pl-5" width="180" height="60" />
                </NavLink>
            </div>

            <div
                className={`${
                    isVisible ? "block" : "hidden"
                } md:block transition-transform duration-200 ease-out shadow-md md:static absolute bg-white md:min-h-fit min-h-[30vh] left-0 top-[15%] md:w-auto w-full flex items-center mb:pb-5 mb:px-10`}
            >
                <ul className="flex md:flex-row flex-col justify-center items-center w-full md:gap-[4vw] text-xl gap-8">
                    {NAV_ITEMS.map(({ to, labelKey }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                onClick={closeMobileMenu}
                                className={({ isActive }) =>
                                    `hover:text-gray-500 transition-colors ${
                                        isActive ? "text-gray-500" : ""
                                    }`
                                }
                            >
                                {t(labelKey)}
                            </NavLink>
                        </li>
                    ))}

                    <li>
                        <FlyOutLink
                            currentLanguage={currentLanguage}
                            setCurrentLanguage={setCurrentLanguage}
                            FlyOutContent={LanguagesFlyOut}
                        >
                            {displayLang}
                            <GiWorld />
                        </FlyOutLink>
                    </li>
                </ul>
            </div>

            <div className="flex items-center gap-6 md:hidden">
                <button
                    type="button"
                    onClick={() => setIsVisible((v) => !v)}
                    aria-label="Abrir menu"
                    aria-expanded={isVisible}
                >
                    <IoMenu className="text-3xl cursor-pointer" />
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
