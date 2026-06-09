import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Modal from "../components/sections/Modal.jsx";
import Carousel from "../components/sections/Carousel.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { HOME_SERVICES } from "../data/services.js";
import { useInView } from "../hooks/useInView.js";
import { useCountUp } from "../hooks/useCountUp.js";

const HIGHLIGHTS = [
    { num: "01", titleKey: "experience", descKey: "experienceDesc" },
    { num: "02", titleKey: "quality", descKey: "qualityDesc" },
    { num: "03", titleKey: "commitment", descKey: "commitmentDesc" },
];

// Placeholder — substituir pelos valores reais da empresa
const STATS = [
    { valueKey: "statsYears", value: 5, suffix: "+" },
    { valueKey: "statsProjects", value: 50, suffix: "+" },
    { valueKey: "statsClients", value: 40, suffix: "+" },
    { valueKey: "statsTeam", value: 10, suffix: "+" },
];

// Placeholder — substituir por testemunhos reais
const TESTIMONIALS = [
    {
        quote: "Excelente trabalho e profissionalismo. A equipa superou as nossas expectativas em todos os aspetos da obra.",
        name: "João Silva",
        role: "Cliente Particular",
    },
    {
        quote: "Comunicação impecável e prazos rigorosamente cumpridos. Recomendo vivamente a Eeengenharia.",
        name: "Maria Santos",
        role: "Proprietária",
    },
    {
        quote: "Do projeto ao acabamento final, estiveram sempre disponíveis e atentos a cada detalhe.",
        name: "Pedro Costa",
        role: "Gestor de Empresa",
    },
];

const QuoteIcon = () => (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true" className="text-muted/50 mb-5">
        <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.2 6.4 6.4 10.4H12V24H0zm18 0V14.4C18 6.4 22.8 1.6 32.4 0L34 2.4C28.4 3.6 25.2 6.4 24.4 10.4H30V24H18z" fill="currentColor" />
    </svg>
);

function StatCounter({ value, suffix, labelKey }) {
    const { t } = useTranslation();
    const [ref, inView] = useInView({ threshold: 0.3 });
    const count = useCountUp(value, { enabled: inView });

    return (
        <div ref={ref} className="text-center md:text-left">
            <span className="font-serif text-6xl md:text-7xl lg:text-8xl text-paper/90">
                {count}{suffix}
            </span>
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-paper/50">{t(labelKey)}</p>
        </div>
    );
}

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);
    const { t } = useTranslation();

    return (
        <main>
            <Carousel />

            {/* Estatísticas */}
            <section className="bg-ink">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0">
                        {STATS.map(({ valueKey, value, suffix }, i) => (
                            <div
                                key={valueKey}
                                className="md:px-10 md:border-l md:border-paper/10 md:first:border-l-0 md:first:pl-0"
                            >
                                <StatCounter value={value} suffix={suffix} labelKey={valueKey} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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

            {/* Testemunhos */}
            <section className="bg-surface">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
                    <Reveal className="max-w-2xl mb-16 md:mb-20">
                        <h2 className="text-4xl md:text-5xl">{t("testimonialsTitle")}</h2>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TESTIMONIALS.map(({ quote, name, role }, i) => (
                            <Reveal key={name} delay={i * 120}>
                                <div className="bg-paper p-8 md:p-10 flex flex-col h-full">
                                    <QuoteIcon />
                                    <p className="text-ink/80 font-light leading-relaxed flex-1 mb-8">
                                        "{quote}"
                                    </p>
                                    <div>
                                        <p className="font-medium">{name}</p>
                                        <p className="text-sm text-muted mt-1">{role}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section>
                <div className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
                    <Reveal>
                        <p className="eyebrow mb-6">{t("ebContact")}</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-10">{t("ctaTitle")}</h2>
                        <button
                            onClick={() => {
                                setShowModal(true);
                                window.gtag?.("event", "cta_click", { event_category: "engagement", event_label: "homepage_cta" });
                            }}
                            className="btn-primary"
                        >
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
