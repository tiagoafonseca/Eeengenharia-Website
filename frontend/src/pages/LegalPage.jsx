import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const LAST_UPDATED = "06/2026";

/**
 * Página legal genérica (privacidade, cookies, termos).
 * Conteúdo preliminar — substituir o texto pela versão legal definitiva.
 *
 * @param {string} titleKey - chave de tradução do título
 * @param {string} introKey - chave de tradução do parágrafo introdutório
 */
const LegalPage = ({ titleKey, introKey }) => {
    const { t } = useTranslation();

    return (
        <main>
            <div className="max-w-3xl mx-auto pt-32 md:pt-44 pb-24 md:pb-32 px-6 md:px-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3 text-center">{t(titleKey)}</h1>
                <p className="eyebrow text-center mb-12">
                    {t("legalUpdated")}: {LAST_UPDATED}
                </p>

                <p className="text-lg text-ink/70 font-light mb-8">{t(introKey)}</p>

                <p className="text-base text-ink/70 font-light bg-surface border-l-2 border-ink p-6">
                    {t("legalNote")}
                </p>

                <div className="mt-12 text-center">
                    <Link to="/contactos" className="link-arrow">
                        {t("contactUs")} <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default LegalPage;
