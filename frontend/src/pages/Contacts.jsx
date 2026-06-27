import { useTranslation } from "react-i18next";
import ContactForm from "../components/sections/ContactForm.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { IoCallOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";

const Contacts = () => {
    const { t } = useTranslation();

    return (
        <main>
            <section className="max-w-5xl mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-24 md:pb-32">
                <Reveal className="text-center mb-12 md:mb-16">
                    <p className="eyebrow mb-6">{t("ebContact")}</p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8">{t("contactUs")}</h1>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-ink/70 font-light">
                        <a href="mailto:geral@eeengenharia.pt" onClick={() => window.gtag?.("event", "contact_click", { event_category: "contact", event_label: "email" })} className="inline-flex items-center gap-2 hover:text-ink transition-colors">
                            <IoMailOutline /> geral@eeengenharia.pt
                        </a>
                        <span className="inline-flex items-center gap-2">
                            <IoCallOutline className="shrink-0" />
                            <a href="tel:+351913928625" onClick={() => window.gtag?.("event", "contact_click", { event_category: "contact", event_label: "phone" })} className="hover:text-ink transition-colors">+351 913 928 625</a>
                            <span className="text-line select-none">|</span>
                            <a href="tel:+351917982411" onClick={() => window.gtag?.("event", "contact_click", { event_category: "contact", event_label: "phone" })} className="hover:text-ink transition-colors">+351 917 982 411</a>
                        </span>
                    </div>
                    <a
                        href="https://maps.google.com/?q=Rua+das+Orquídeas,+nº+2,+Amora,+Portugal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 mt-5 text-ink/70 font-light hover:text-ink transition-colors"
                    >
                        <IoLocationOutline className="shrink-0" /> Rua das Orquídeas, nº 2, Cruz de Pau, Amora
                    </a>
                </Reveal>

                <Reveal delay={100}>
                    <ContactForm />
                </Reveal>
            </section>
        </main>
    );
};

export default Contacts;
