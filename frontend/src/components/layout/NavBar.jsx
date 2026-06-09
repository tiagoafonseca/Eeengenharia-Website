import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiWorld } from "react-icons/gi";
import { IoMenu, IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import LanguagesFlyOut from "../ui/LanguageFlyOut.jsx";
import FlyOutLink from "../ui/FlyOutLink.jsx";
// import ThemeToggle from "../ui/ThemeToggle.jsx"; // dark mode desativado por agora
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

    useEffect(() => {
        if (!isVisible) return;
        const handleOutside = (e) => {
            if (!e.target.closest("nav")) setIsVisible(false);
        };
        document.addEventListener("pointerdown", handleOutside);
        return () => document.removeEventListener("pointerdown", handleOutside);
    }, [isVisible]);

    const displayLang = currentLanguage.toUpperCase();

    // Qualquer operação da navbar leva a página ao topo (mesmo sem mudança de rota)
    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const handleNavClick = () => {
        setIsVisible(false);
        scrollTop();
    };

    return (
        <nav
            className={`bg-paper dark:bg-neutral-900 flex justify-between items-center w-full mx-auto py-6 px-6 md:px-12 relative md:fixed md:top-0 md:left-0 md:z-50 transition-shadow duration-300 ${
                scrolled ? "shadow-[0_1px_0_0_rgba(0,0,0,0.06)]" : "border-line dark:border-neutral-800 border-b"
            }`}
        >
            <div>
                <NavLink to="/" onClick={handleNavClick}>
                    <img src="/logo.webp" alt="Eeengenharia" className="h-10 md:h-12 w-auto" width="470" height="193" />
                </NavLink>
            </div>

            <div
                className={`mobile-menu ${
                    isVisible ? "is-open" : ""
                } flex flex-col md:flex-row items-center absolute md:static top-full left-0 w-full md:w-auto bg-paper dark:bg-neutral-900 md:bg-transparent md:dark:bg-transparent shadow-md md:shadow-none py-8 md:py-0 px-10 md:px-0 z-40`}
            >
                <ul className="flex flex-col md:flex-row justify-center items-center w-full md:w-auto md:gap-10 lg:gap-12 gap-8">
                    {NAV_ITEMS.map(({ to, labelKey }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                onClick={handleNavClick}
                                className={({ isActive }) =>
                                    `uppercase text-sm tracking-[0.18em] transition-colors duration-300 hover:text-muted ${
                                        isActive ? "text-muted" : "text-ink dark:text-neutral-100"
                                    }`
                                }
                            >
                                {t(labelKey)}
                            </NavLink>
                        </li>
                    ))}

                    <li className="md:ml-2">
                        <FlyOutLink
                            currentLanguage={currentLanguage}
                            setCurrentLanguage={setCurrentLanguage}
                            FlyOutContent={LanguagesFlyOut}
                        >
                            <span className="text-sm tracking-[0.18em]">{displayLang}</span>
                            <GiWorld />
                        </FlyOutLink>
                    </li>

                    {/* Dark mode desativado por agora — para reativar, descomenta o import e este item:
                    <li>
                        <ThemeToggle />
                    </li> */}
                </ul>
            </div>

            <div className="flex items-center gap-6 md:hidden">
                <button
                    type="button"
                    onClick={() => setIsVisible((v) => !v)}
                    onMouseEnter={() => setIsVisible(true)}
                    aria-label={isVisible ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isVisible}
                >
                    {isVisible ? (
                        <IoClose className="text-3xl cursor-pointer" />
                    ) : (
                        <IoMenu className="text-3xl cursor-pointer" />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
