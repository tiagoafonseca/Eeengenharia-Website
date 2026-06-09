import { useState } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "../components/ui/Reveal.jsx";

const FAQ_NUMS = [1, 2, 3, 4, 5, 6, 7];

const PlusIcon = ({ open }) => (
    <svg
        width="20" height="20" viewBox="0 0 20 20" fill="none"
        className={`shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        aria-hidden="true"
    >
        <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const AccordionItem = ({ questionKey, answerKey, isOpen, onToggle }) => {
    const { t } = useTranslation();

    return (
        <div className="border-b border-line">
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between py-6 text-left gap-6 group"
            >
                <span className="text-lg md:text-xl">{t(questionKey)}</span>
                <span className="text-muted group-hover:text-ink transition-colors duration-200">
                    <PlusIcon open={isOpen} />
                </span>
            </button>
            <div
                className="overflow-hidden transition-all duration-500 ease-out"
                style={{ maxHeight: isOpen ? "400px" : "0px" }}
            >
                <p className="text-ink/70 font-light leading-relaxed pb-6">{t(answerKey)}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

    return (
        <main>
            <section className="max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-12 md:pb-16 text-center">
                <p className="eyebrow mb-6">FAQ</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl">{t("faqTitle")}</h1>
                <p className="mt-6 text-lg text-ink/70 font-light max-w-2xl mx-auto">{t("faqSubtitle")}</p>
            </section>

            <section className="max-w-3xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
                <Reveal>
                    <div className="border-t border-line">
                        {FAQ_NUMS.map((n, i) => (
                            <AccordionItem
                                key={n}
                                questionKey={`faqQ${n}`}
                                answerKey={`faqA${n}`}
                                isOpen={openIndex === i}
                                onToggle={() => toggle(i)}
                            />
                        ))}
                    </div>
                </Reveal>
            </section>
        </main>
    );
};

export default FAQ;
