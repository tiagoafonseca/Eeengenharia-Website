import { useTranslation } from "react-i18next";
import ContactForm from "../components/sections/ContactForm.jsx";
import Reveal from "../components/ui/Reveal.jsx";

const VALUE_KEYS = [
    { key: "valueExclusivity",  descKey: "valueExclusivityDesc" },
    { key: "valueTransparency", descKey: "valueTransparencyDesc" },
    { key: "valueInnovation",   descKey: "valueInnovationDesc" },
    { key: "valueQuality",      descKey: "valueQualityDesc" },
];

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <main>
            {/* História */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-24 md:pb-32">
                <Reveal className="max-w-3xl mb-16 md:mb-20">
                    <p className="eyebrow mb-6">{t("ebCompany")}</p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl">{t("ourHistory")}</h1>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <Reveal className="space-y-5 text-lg text-ink/70 font-light">
                        <p>{t("historyP1")}</p>
                        <p>{t("historyP2")}</p>
                        <p>{t("historyP3")}</p>

                        <div className="pt-6">
                            <p className="eyebrow mb-5">{t("ourValues")}</p>
                            <ul className="divide-y divide-line border-t border-line">
                                {VALUE_KEYS.map(({ key, descKey }) => (
                                    <li key={key} className="py-4">
                                        <p className="font-serif text-2xl text-ink mb-1">{t(key)}</p>
                                        <p className="text-sm text-ink/60 font-light leading-relaxed">{t(descKey)}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal delay={150}>
                        <img
                            className="w-full h-auto object-cover lg:sticky lg:top-28"
                            src="/portfolio/moradias/pontinha-1.webp"
                            alt={t("ourHistory")}
                            width="1000"
                            height="600"
                            loading="lazy"
                            decoding="async"
                        />
                    </Reveal>
                </div>
            </section>

            {/* Equipa */}
            <section className="bg-surface">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
                    <Reveal className="text-center mb-16 md:mb-20">
                        <h2 className="text-4xl md:text-5xl">{t("ourTeam")}</h2>
                    </Reveal>

                    <Reveal delay={100} className="max-w-4xl mx-auto">
                        <div className="aspect-[2048/1080] bg-ink overflow-hidden">
                            <video
                                className="w-full h-full object-cover"
                                controls
                                preload="none"
                                playsInline
                                poster="/video/equipa-poster.webp"
                                onPlay={() => window.gtag?.("event", "video_play", { event_category: "engagement", event_label: "team_presentation" })}
                            >
                                <source src="/video/equipa.webm" type="video/webm" />
                                <source src="/video/equipa.mp4" type="video/mp4" />
                                {t("videoNotSupported")}
                            </video>
                        </div>
                    </Reveal>

                    <Reveal className="max-w-3xl mx-auto text-center mt-16 md:mt-20 space-y-4 text-lg text-ink/70 font-light">
                        <p>{t("teamP1")}</p>
                        <p>{t("teamP2")}</p>
                    </Reveal>
                </div>
            </section>

            {/* Contacto */}
            <section className="max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32">
                <Reveal className="text-center mb-12 md:mb-16">
                    <p className="eyebrow mb-6">{t("ebContact")}</p>
                    <h2 className="text-4xl md:text-5xl">{t("contactUs")}</h2>
                </Reveal>
                <ContactForm />
            </section>
        </main>
    );
};

export default AboutUs;
