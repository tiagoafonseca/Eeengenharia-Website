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
        i18n.changeLanguage(lang)
    }
    const [isHover, setIsHover] = useState(null);

    return (
        <div className="h-[125px] w-[102px] top-2 bg-white shadow-xl text-[15px]">
            <div className="flex flex-col justify-center items-center gap-y-2 py-2">
                {languages
                    .filter((lang) => lang.code !== currentLanguage) // só mostra as que não estão ativas
                    .map((lang) => (
                        <div key={lang.code} className="group inline-block relative w-full text-center">
                            <button
                                onMouseEnter={() => setIsHover(lang.code)}
                                onMouseLeave={() => setIsHover(null)}
                                id={lang.code}
                                onClick={() => {setCurrentLanguage(lang.code); changeLanguage(lang.code)}}
                                className="flex flex-row justify-center items-center gap-x-2 w-full py-1"
                            >
                                {lang.lang} <GiWorld/>
                            </button>
                            <span
                                className={`absolute left-5 bottom-0 h-[1px] bg-black transition-all duration-300 ${
                                    isHover === lang.code ? "w-15" : "w-0"}`}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
}
