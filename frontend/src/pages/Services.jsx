import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Reveal from "../components/ui/Reveal.jsx";
import { SERVICE_SECTIONS } from "../data/services.js";

const Services = () => {
    const { t } = useTranslation();
    const [active, setActive] = useState(SERVICE_SECTIONS[0].id);

    const BudgetDivider = () => (
        <div className="flex items-center justify-center my-10 md:my-15 w-[90%] md:w-[85%]">
            <div className="flex-1 h-[2px] border-t-2 border-black dark:border-neutral-100" />
            <Link
                to="/contactos"
                className="mx-4 text-base md:text-xl font-bold text-center transition-transform duration-200 hover:scale-105 origin-center"
            >
                {t("requestBudget").toUpperCase()}
            </Link>
            <div className="flex-1 h-[2px] border-t-2 border-black dark:border-neutral-100" />
        </div>
    );

    return (
        <main>
            <div className="flex flex-col justify-center items-center mt-24 md:mt-30 mb-10 px-6 md:p-10">
                <h1 className="font-bold text-3xl md:text-[40px] mb-10 text-center">{t("servicesTitle")}</h1>

                <div className="flex flex-row flex-wrap justify-center items-center gap-4 md:gap-x-15 text-lg md:text-[25px] mb-10">
                    {SERVICE_SECTIONS.map(({ id, labelKey }) => (
                        <div key={id} className="group inline-block relative">
                            <a href={`#${id}`} onClick={() => setActive(id)}>{t(labelKey)}</a>
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] bg-black dark:bg-neutral-100 transition-all duration-300 ${
                                    active === id ? "w-full" : "w-0 group-hover:w-full"
                                }`}
                            />
                        </div>
                    ))}
                </div>

                {SERVICE_SECTIONS.map(({ id, titleKey, descKey, image }) => (
                    <div key={id} className="w-full flex flex-col items-center">
                        <BudgetDivider />
                        <section className="w-[90%] md:w-[85%] scroll-mt-28" id={id}>
                            <Reveal className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-x-15 mt-10 md:mt-15 mb-10">
                                <div className="flex flex-col justify-start gap-y-5 w-full md:w-[60%]">
                                    <h2 className="font-bold text-2xl md:text-[25px]">{t(titleKey)}</h2>
                                    <p className="text-lg md:text-[20px]">{t(descKey)}</p>
                                </div>
                                <div className="flex flex-col justify-center items-center gap-y-8 w-full md:w-auto">
                                    <img src={image} alt={t(titleKey)} width="400" height="300" loading="lazy" className="w-full max-w-[400px] h-auto" />
                                    <Link
                                        to="/portfolio"
                                        className="bg-white dark:bg-neutral-900 border-2 border-black dark:border-neutral-100 text-black dark:text-neutral-100 text-center p-2 w-[70%] md:w-[50%] hover:bg-black hover:text-white dark:hover:bg-neutral-100 dark:hover:text-black transition-all duration-300 ease-linear"
                                    >
                                        {t("viewProjects")}
                                    </Link>
                                </div>
                            </Reveal>
                        </section>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Services;
