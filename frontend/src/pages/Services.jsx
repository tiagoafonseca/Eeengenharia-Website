import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SERVICE_SECTIONS } from "../data/services.js";

const Services = () => {
    const { t } = useTranslation();
    const [active, setActive] = useState(SERVICE_SECTIONS[0].id);

    const BudgetDivider = () => (
        <div className="flex items-center justify-center my-15 w-[85%]">
            <div className="flex-1 h-[2px] border-t-2 border-black" />
            <Link
                to="/contactos"
                className="mx-4 text-xl font-bold transition-transform duration-200 hover:scale-105 origin-center"
            >
                {t("requestBudget").toUpperCase()}
            </Link>
            <div className="flex-1 h-[2px] border-t-2 border-black" />
        </div>
    );

    return (
        <main>
            <div className="flex flex-col justify-center items-center mt-30 mb-10 p-10">
                <h1 className="font-bold text-[40px] mb-10">{t("servicesTitle")}</h1>

                <div className="flex flex-row justify-center items-center gap-x-15 text-[25px] mb-10">
                    {SERVICE_SECTIONS.map(({ id, labelKey }) => (
                        <div key={id} className="group inline-block relative">
                            <a href={`#${id}`} onClick={() => setActive(id)}>{t(labelKey)}</a>
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 ${
                                    active === id ? "w-full" : "w-0 group-hover:w-full"
                                }`}
                            />
                        </div>
                    ))}
                </div>

                {SERVICE_SECTIONS.map(({ id, titleKey }) => (
                    <div key={id} className="w-full flex flex-col items-center">
                        <BudgetDivider />
                        <section className="w-[85%]" id={id}>
                            <div className="flex flex-row justify-center items-center gap-x-15 mt-15 mb-10">
                                <div className="flex flex-col justify-start gap-y-5 w-[60%]">
                                    <h2 className="font-bold text-[25px]">{t(titleKey)}</h2>
                                    <p className="text-[20px]">{t("serviceDesc")}</p>
                                </div>
                                <div className="flex flex-col justify-center items-center gap-y-8">
                                    <img src="/orcamento-img2.webp" alt={t(titleKey)} width="400" height="300" loading="lazy" />
                                    <Link
                                        to="/portfolio"
                                        className="bg-white border-2 border-black text-black text-center p-2 w-[50%] hover:bg-black hover:text-white transition-all duration-300 ease-linear"
                                    >
                                        {t("viewProjects")}
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Services;
