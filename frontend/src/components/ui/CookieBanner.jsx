import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const STORAGE_KEY = "cookie_consent";

const CookieBanner = () => {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);
    const [hiding, setHiding]   = useState(false);

    useEffect(() => {
        if (!localStorage.getItem(STORAGE_KEY)) {
            // Pequeno delay para o banner não competir com a animação de entrada da página
            const timer = setTimeout(() => setVisible(true), 800);
            return () => clearTimeout(timer);
        }
    }, []);

    const dismiss = (choice) => {
        localStorage.setItem(STORAGE_KEY, choice);
        setHiding(true);
        setTimeout(() => setVisible(false), 400);
    };

    if (!visible) return null;

    return (
        <div
            role="region"
            aria-label="Consentimento de cookies"
            className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-400 ease-out ${
                hiding ? "translate-y-full" : "translate-y-0"
            }`}
            style={{ animation: hiding ? undefined : "cookieSlideUp 0.4s ease-out" }}
        >
            <div className="bg-paper border-t border-line shadow-[0_-4px_24px_-4px_rgba(0,0,0,0.1)]">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    <p className="flex-1 text-sm text-ink/70 font-light leading-relaxed">
                        {t("cookieBannerText")}{" "}
                        <Link to="/cookies" className="underline underline-offset-2 hover:text-ink transition-colors duration-200">
                            {t("cookiePolicy")}
                        </Link>
                        .
                    </p>
                    <div className="flex items-center gap-3 shrink-0">
                        <button
                            onClick={() => dismiss("essential")}
                            className="uppercase text-xs tracking-[0.18em] text-ink/60 hover:text-ink transition-colors duration-200 whitespace-nowrap"
                        >
                            {t("cookieEssential")}
                        </button>
                        <button
                            onClick={() => dismiss("accepted")}
                            className="btn-primary !py-3 !px-6 text-xs whitespace-nowrap"
                        >
                            {t("cookieAccept")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
