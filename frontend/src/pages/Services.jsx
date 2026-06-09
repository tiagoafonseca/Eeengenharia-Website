import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Reveal from "../components/ui/Reveal.jsx";
import Modal from "../components/sections/Modal.jsx";
import HowWeWork from "../components/sections/HowWeWork.jsx";
import { SERVICE_SECTIONS } from "../data/services.js";

const Services = () => {
    const { t } = useTranslation();
    const [active, setActive] = useState(SERVICE_SECTIONS[0].id);
    const [showModal, setShowModal] = useState(false);

    return (
        <main>
            {/* Cabeçalho */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-12 md:pb-16 text-center">
                <p className="eyebrow mb-6">{t("ebOurServices")}</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl">{t("services")}</h1>
            </section>

            {/* Navegação entre serviços */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 pb-16 md:pb-24">
                {SERVICE_SECTIONS.map(({ id, labelKey }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        onClick={() => setActive(id)}
                        className={`uppercase text-sm tracking-[0.18em] pb-1 border-b transition-colors duration-300 ${
                            active === id
                                ? "border-ink text-ink"
                                : "border-transparent text-muted hover:text-ink"
                        }`}
                    >
                        {t(labelKey)}
                    </a>
                ))}
            </div>

            {/* Secções de serviço (zig-zag) */}
            {SERVICE_SECTIONS.map(({ id, titleKey, descKey, image }, i) => {
                const reversed = i % 2 === 1;
                return (
                    <section key={id} id={id} className="scroll-mt-28 border-t border-line">
                        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                            <Reveal className={reversed ? "md:order-2" : ""}>
                                <div className="overflow-hidden">
                                    <img
                                        src={image}
                                        alt={t(titleKey)}
                                        width="640"
                                        height="480"
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-[320px] md:h-[440px] object-cover"
                                    />
                                </div>
                            </Reveal>
                            <Reveal delay={150} className={reversed ? "md:order-1" : ""}>
                                <span className="font-serif text-5xl md:text-6xl text-muted">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">{t(titleKey)}</h2>
                                <p className="text-lg text-ink/70 font-light mb-8 max-w-xl">{t(descKey)}</p>
                                <Link to="/portfolio" className="link-arrow">
                                    {t("viewProjects")} <span aria-hidden="true">→</span>
                                </Link>
                            </Reveal>
                        </div>
                    </section>
                );
            })}

            <HowWeWork />

            {/* FAQ teaser */}
            <section className="border-t border-line">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <Reveal>
                        <p className="eyebrow mb-4">FAQ</p>
                        <h2 className="text-3xl md:text-4xl">{t("faqBannerText")}</h2>
                    </Reveal>
                    <Reveal delay={100} className="shrink-0">
                        <Link to="/faq" className="btn-outline">
                            {t("faqBannerBtn")}
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* CTA final */}
            <section className="bg-surface">
                <div className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
                    <Reveal>
                        <p className="eyebrow mb-6">{t("ebContact")}</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-10">{t("ctaTitle")}</h2>
                        <button onClick={() => { setShowModal(true); window.gtag?.("event", "cta_click", { event_category: "engagement", event_label: "services_cta" }); }} className="btn-primary">
                            {t("requestBudget")}
                        </button>
                    </Reveal>
                </div>
            </section>

            <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
        </main>
    );
};

export default Services;
