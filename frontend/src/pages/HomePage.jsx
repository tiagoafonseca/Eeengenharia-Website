import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Modal from "../components/sections/Modal.jsx";
import Carousel from "../components/sections/Carousel.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { HOME_SERVICES } from "../data/services.js";

const HIGHLIGHTS = [
    { num: "01", titleKey: "experience", descKey: "experienceDesc" },
    { num: "02", titleKey: "quality", descKey: "qualityDesc" },
    { num: "03", titleKey: "commitment", descKey: "commitmentDesc" },
];

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);
    const { t } = useTranslation();

    return (
        <main>
            <Carousel />

            {/* Quem somos */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                <Reveal>
                    <p className="eyebrow mb-6">{t("ebCompany")}</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8">{t("whoWeAre")}</h2>
                    <p className="text-lg md:text-xl text-ink/70 font-light max-w-xl">{t("whoWeAreDesc")}</p>
                    <Link to="/sobrenos" className="link-arrow mt-10">
                        {t("learnMore")} <span aria-hidden="true">→</span>
                    </Link>
                </Reveal>
                <Reveal delay={150}>
                    <img
                        src="/quem-somos.webp"
                        alt={t("whoWeAre")}
                        width="600"
                        height="450"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto object-cover"
                    />
                </Reveal>
            </section>

            {/* Porquê nós — valores em numerais */}
            <section className="bg-surface">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
                    <Reveal className="max-w-2xl mb-16 md:mb-20">
                        <h2 className="text-4xl md:text-5xl">{t("ebWhyUs")}</h2>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
                        {HIGHLIGHTS.map(({ num, titleKey, descKey }, i) => (
                            <Reveal
                                key={titleKey}
                                delay={i * 120}
                                className="md:px-12 md:border-l md:border-line md:first:border-l-0 md:first:pl-0"
                            >
                                <span className="font-serif text-5xl md:text-6xl text-muted">{num}</span>
                                <h3 className="text-2xl md:text-3xl mt-6 mb-4">{t(titleKey)}</h3>
                                <p className="text-ink/70 font-light">{t(descKey)}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Serviços */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
                <Reveal className="max-w-2xl mb-16 md:mb-20">
                    <p className="eyebrow mb-6">{t("ebOurServices")}</p>
                    <h2 className="text-4xl md:text-5xl">{t("services")}</h2>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                    {HOME_SERVICES.map(({ image, titleKey, descKey }, i) => (
                        <Reveal key={titleKey} delay={i * 120}>
                            <Link to="/servicos" className="group block">
                                <div className="overflow-hidden">
                                    <img
                                        src={image}
                                        alt={t(titleKey)}
                                        width="300"
                                        height="250"
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-2xl md:text-3xl mt-6 mb-3">{t(titleKey)}</h3>
                                <p className="text-ink/70 font-light">{t(descKey)}</p>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-surface">
                <div className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
                    <Reveal>
                        <p className="eyebrow mb-6">{t("ebContact")}</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-10">{t("ctaTitle")}</h2>
                        <button onClick={() => setShowModal(true)} className="btn-primary">
                            {t("requestBudget")}
                        </button>
                    </Reveal>
                </div>
            </section>

            <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
        </main>
    );
};

export default HomePage;
