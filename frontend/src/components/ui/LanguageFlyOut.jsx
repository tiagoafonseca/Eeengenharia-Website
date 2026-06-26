import React, {useState} from "react";
import {GiWorld} from "react-icons/gi";
import {useTranslation} from "react-i18next";

export default function LanguagesFlyOut({currentLanguage, setCurrentLanguage}) {
    const languages = [
        {code: "pt", lang: "PT"},
        {code: "en", lang: "EN"},
        {code: "es", lang: "ES"},
        {code: "fr", lang: "FR"},
    ]

    const {i18n} = useTranslation()

    const changeLanguage = (lang) => {
        // Pequeno compasso de espera para uma transição mais suave
        setTimeout(() => i18n.changeLanguage(lang), 250)
    }
    const [isHover, setIsHover] = useState(null);

    return (
        <div className="w-[110px]">
            <div className="flex flex-col justify-center items-center gap-y-1 py-3">
                {languages
                    .filter((lang) => lang.code !== currentLanguage)
                    .map((lang) => (
                        <div key={lang.code} className="group inline-block relative w-full text-center">
                            <button
                                onMouseEnter={() => setIsHover(lang.code)}
                                onMouseLeave={() => setIsHover(null)}
                                id={lang.code}
                                onClick={() => {setCurrentLanguage(lang.code); changeLanguage(lang.code); window.scrollTo({ top: 0, behavior: "smooth" })}}
                                className="font-sans font-light flex flex-row justify-center items-center gap-x-2 w-full py-2 text-sm hover:text-muted transition-colors"
                            >
                                {lang.lang} <GiWorld/>
                            </button>
                            <span
                                className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-px bg-ink dark:bg-neutral-100 transition-all duration-300 ${
                                    isHover === lang.code ? "w-10" : "w-0"}`}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
}
