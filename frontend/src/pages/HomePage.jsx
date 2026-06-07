import { useState } from "react";
import { Link } from "react-router-dom";
import { GrStatusGood, GrUserWorker } from "react-icons/gr";
import { LuCalendarCheck } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import Modal from "../components/sections/Modal.jsx";
import Carousel from "../components/sections/Carousel.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { HOME_SERVICES } from "../data/services.js";

const HIGHLIGHTS = [
    { icon: GrUserWorker, titleKey: "experience", descKey: "experienceDesc" },
    { icon: GrStatusGood, titleKey: "quality", descKey: "qualityDesc" },
    { icon: LuCalendarCheck, titleKey: "commitment", descKey: "commitmentDesc" },
];

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);
    const { t } = useTranslation();

    return (
        <main>
            <Carousel />

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-6 md:px-25 py-12 md:py-20">
                <Reveal className="w-full md:w-1/2 max-w-xl">
                    <h1 className="font-bold text-2xl md:text-3xl pb-5">{t("whoWeAre")}</h1>
                    <p className="text-lg md:text-2xl">{t("whoWeAreDesc")}</p>

                    <div className="group inline-block relative cursor-pointer mt-10 md:mt-15">
                        <Link
                            to="/sobrenos"
                            className="font-semibold text-black dark:text-neutral-100 text-xl md:text-2xl transition-colors duration-300 group-hover:text-black dark:group-hover:text-neutral-100"
                        >
                            {t("learnMore")}
                        </Link>
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black dark:bg-neutral-100 transition-all duration-300 group-hover:w-full" />
                    </div>
                </Reveal>

                <Reveal delay={150} className="w-full md:w-1/2 flex justify-center">
                    <img src="/quem-somos.webp" alt={t("whoWeAre")} width="600" height="450" loading="lazy" className="w-full max-w-[600px] h-auto" />
                </Reveal>
            </div>

            <div className="w-full bg-black py-16 md:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 lg:gap-x-[200px] text-white w-full max-w-6xl mx-auto px-6">
                    {HIGHLIGHTS.map(({ icon, titleKey, descKey }, i) => {
                        const Icon = icon;
                        return (
                            <Reveal key={titleKey} delay={i * 120} className="flex flex-col items-center">
                                <Link
                                    className="flex items-center justify-center h-[120px] w-[120px] rounded-full ring-0 ring-white hover:text-black hover:bg-white hover:ring-3 hover:ring-offset-2 hover:ring-offset-black transition-all duration-300 ease-linear"
                                    to="/portfolio"
                                    aria-label={t(titleKey)}
                                >
                                    <Icon className="text-[80px]" />
                                </Link>
                                <h2 className="text-center font-bold text-2xl md:text-3xl pt-5">{t(titleKey)}</h2>
                                <p className="text-center text-lg md:text-xl pt-4">{t(descKey)}</p>
                            </Reveal>
                        );
                    })}
                </div>
            </div>

            <div className="flex items-center justify-center px-6">
                <div className="mt-16 mb-16 md:mt-25 md:mb-25 flex flex-col items-center justify-center w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 lg:gap-x-[200px] text-black dark:text-neutral-100 w-full max-w-6xl mx-auto mb-4">
                        {HOME_SERVICES.map(({ image, titleKey, descKey }, i) => (
                            <Reveal key={titleKey} delay={i * 120} className="flex flex-col items-center">
                                <img src={image} alt={t(titleKey)} width="300" height="250" loading="lazy" className="w-full max-w-[300px] h-auto" />
                                <h2 className="text-center font-bold text-2xl md:text-3xl pt-5">{t(titleKey)}</h2>
                                <p className="text-center text-lg md:text-xl pt-4">{t(descKey)}</p>
                            </Reveal>
                        ))}
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            onClick={() => setShowModal(true)}
                            className="bg-black dark:bg-white mt-10 px-6 py-4 text-white dark:text-black text-lg md:text-xl hover:bg-gray-400 dark:hover:bg-neutral-300 transition-all duration-300 ease-linear"
                        >
                            {t("requestBudget")}
                        </button>
                    </div>
                </div>
            </div>

            <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
        </main>
    );
};

export default HomePage;
