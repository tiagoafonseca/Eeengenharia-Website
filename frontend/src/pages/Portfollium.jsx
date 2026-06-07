import { useState } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "../components/ui/Reveal.jsx";

const ROW_COUNT = 5;

const Portfollium = () => {
    const { t } = useTranslation();
    const botoes = [t("portfolio"), "Filtrar", "Reviews", t("requestBudget")];
    const [active, setActive] = useState(botoes[0]);

    return (
        <main>
            <div className="flex flex-col justify-center items-center mt-24 md:mt-30 mb-10 px-6 md:p-10">
                <h1 className="font-bold text-3xl md:text-[40px] mb-10 text-center">{t("portfolioTitle")}</h1>

                <div className="flex flex-row flex-wrap justify-center items-center gap-4 md:gap-x-15 text-lg md:text-[25px] mb-10">
                    {botoes.map((label) => (
                        <div key={label} className="group inline-block relative">
                            <button onClick={() => setActive(label)}>{label}</button>
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 ${
                                    active === label ? "w-full" : "w-0 group-hover:w-full"
                                }`}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col justify-center items-center gap-5 w-full max-w-6xl">
                    {Array.from({ length: ROW_COUNT }).map((_, i) => (
                        <Reveal
                            key={i}
                            className="portfolio-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full"
                        >
                            <img src="/img1.webp" alt="" width="400" height="300" loading="lazy" className="w-full h-auto" />
                            <img src="/img1.webp" alt="" width="400" height="300" loading="lazy" className="w-full h-auto" />
                            <img src="/img1.webp" alt="" width="400" height="300" loading="lazy" className="w-full h-auto" />
                        </Reveal>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Portfollium;
