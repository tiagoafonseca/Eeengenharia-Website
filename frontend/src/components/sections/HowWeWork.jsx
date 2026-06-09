import { useTranslation } from "react-i18next";
import Reveal from "../ui/Reveal.jsx";

const STEPS = [1, 2, 3, 4, 5];

const HowWeWork = () => {
    const { t } = useTranslation();

    return (
        <section className="border-t border-line">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
                <Reveal className="max-w-2xl mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl">{t("howWeWorkTitle")}</h2>
                </Reveal>

                <div className="relative">
                    {/* horizontal connector line (desktop only) */}
                    <div
                        className="hidden md:block absolute top-5 left-[10%] right-[10%] h-px bg-line"
                        aria-hidden="true"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
                        {STEPS.map((n, i) => (
                            <Reveal key={n} delay={i * 100} className="flex flex-col items-start md:items-center text-left md:text-center">
                                <div className="relative z-10 w-10 h-10 rounded-full bg-ink text-paper flex items-center justify-center text-sm font-medium mb-5 shrink-0">
                                    {n}
                                </div>
                                <h3 className="text-base md:text-lg font-medium mb-2">
                                    {t(`howWeWorkStep${n}Title`)}
                                </h3>
                                <p className="text-sm text-ink/70 font-light leading-relaxed">
                                    {t(`howWeWorkStep${n}Desc`)}
                                </p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
