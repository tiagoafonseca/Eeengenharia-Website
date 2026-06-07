import { useState } from "react";
import { Link } from "react-router-dom";
import { GrStatusGood } from "react-icons/gr";
import { LuCalendarCheck } from "react-icons/lu";
import { GrUserWorker } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import Modal from "../components/Modal.jsx";
import Carousel from "../components/Carousel.jsx";

const SERVICES = [
    { image: "/orcamento-img1.webp", titleKey: "houseConstruction", descKey: "houseConstructionDesc" },
    { image: "/orcamento-img2.webp", titleKey: "renovations",       descKey: "renovationsDesc" },
    { image: "/orcamento-img3.webp", titleKey: "projectElaboration", descKey: "projectElaborationDesc" },
];

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);
    const { t } = useTranslation();

    return (
        <main>
            <Carousel />

            <div className="flex flex-row items-center justify-center px-25 py-20">
                <div className="p-10 m-15">
                    <h1 className="font-bold text-[30px] pb-5">{t("whoWeAre")}</h1>
                    <p className="text-[25px]">{t("whoWeAreDesc")}</p>

                    <div className="group inline-block relative cursor-pointer mt-15">
                        <Link
                            to="/sobrenos"
                            className="font-semibold text-black text-[25px] transition-colors duration-300 group-hover:text-black"
                        >
                            {t("learnMore")}
                        </Link>
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
                    </div>
                </div>

                <div>
                    <img src="/quem-somos.webp" alt={t("whoWeAre")} width="600" height="450" loading="lazy" />
                </div>
            </div>

            <div className="relative w-full h-[500px] bg-black flex items-center justify-center">
                <div className="grid grid-cols-3 gap-x-[200px] text-white w-full max-w-6xl mx-auto">
                    <div className="flex justify-center pb-4">
                        <Link
                            className="flex items-center justify-center h-[120px] w-[120px] rounded-full ring-0 ring-white hover:text-black hover:bg-white hover:ring-3 hover:ring-offset-2 hover:ring-offset-black transition-all duration-300 ease-linear"
                            to="/portfolio"
                            aria-label={t("experience")}
                        >
                            <GrUserWorker className="text-[80px]" />
                        </Link>
                    </div>
                    <div className="flex justify-center pb-4">
                        <Link
                            className="flex items-center justify-center h-[120px] w-[120px] rounded-full ring-0 ring-white hover:text-black hover:bg-white hover:ring-3 hover:ring-offset-2 hover:ring-offset-black transition-all duration-300 ease-linear"
                            to="/portfolio"
                            aria-label={t("quality")}
                        >
                            <GrStatusGood className="text-[80px]" />
                        </Link>
                    </div>
                    <div className="flex justify-center pb-4">
                        <Link
                            className="flex items-center justify-center h-[120px] w-[120px] rounded-full ring-0 ring-white hover:text-black hover:bg-white hover:ring-3 hover:ring-offset-2 hover:ring-offset-black transition-all duration-300 ease-linear"
                            to="/portfolio"
                            aria-label={t("commitment")}
                        >
                            <LuCalendarCheck className="text-[80px]" />
                        </Link>
                    </div>

                    <div className="text-center font-bold text-[30px] pt-2">{t("experience")}</div>
                    <div className="text-center font-bold text-[30px] pt-2">{t("quality")}</div>
                    <div className="text-center font-bold text-[30px] pt-2">{t("commitment")}</div>

                    <p className="text-center text-[20px] pt-5">{t("experienceDesc")}</p>
                    <p className="text-center text-[20px] pt-5">{t("qualityDesc")}</p>
                    <p className="text-center text-[20px] pt-5">{t("commitmentDesc")}</p>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="mt-25 mb-25 flex flex-col items-center justify-center">
                    <div className="grid grid-cols-3 gap-x-[200px] text-black w-full mx-auto mb-4">
                        {SERVICES.map(({ image, titleKey, descKey }) => (
                            <div key={titleKey} className="flex justify-center">
                                <img src={image} alt={t(titleKey)} width="300" height="250" loading="lazy" />
                            </div>
                        ))}
                        {SERVICES.map(({ titleKey }) => (
                            <div key={titleKey + "-title"} className="text-center font-bold text-[30px] pt-5">
                                {t(titleKey)}
                            </div>
                        ))}
                        {SERVICES.map(({ descKey }) => (
                            <p key={descKey} className="text-center text-[20px] pt-5">
                                {t(descKey)}
                            </p>
                        ))}
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            onClick={() => setShowModal(true)}
                            className="bg-black mt-10 px-3 py-4 text-white text-[20px] hover:bg-gray-400 transition-all duration-300 ease-linear"
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
